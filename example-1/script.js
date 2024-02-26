window.onload = function(){
(async () => {
    /**
     * see https://docs.acquired.com/docs/set-up-and-integrate-components to generate session id
     * 
     */
    const sessionId = "83f569f7-bea5-327c-1426-617e00ea923c";

    /**
     *  public_key can be found in Settings > API Access.
     */
    const acquired = new Acquired('pk_c4ac45debfe91b36e4fb092d2b30f3a5');
    const options = {
      session: sessionId,
      environment: "test"
    };

    // Set up acquired.js and components to use in checkout form, passing the client secret obtained in step 3
    const components = acquired.components(options);

    const style = {
        base: {
          color: 'black',
          backgroundColor: '#fff',
          padding: '12px 16px',
          fontFamily: 'Arial',
          fontSize: '15px',
          fontWeight: '400',
          border: '1px solid #ccc',
          borderColor: 'gray',
          borderRadius: '6px'
        },
        focus: {
          color: 'green',
          borderColor: 'green'
        },
        invalid: {
          color: 'orange',
          borderColor: 'orange'
        },
        placeholder: {
          color: 'gray'
        }
    };
    
    // Create and mount the Payment component
    const cardNumberComponent = components.create('cardNumber', {
      style: style
    });
    cardNumberComponent.mount('#card-number-component');

    const cardholderNameComponent = components.create('cardholderName', {
      style: style
    });
    cardholderNameComponent.mount('#cardholder-component');

    const cardExpireDateComponent = components.create('cardExpireDate', {
      style: style
    });
    cardExpireDateComponent.mount('#card-expiry-date-component');

    const cardCvvComponent = components.create('cardCvv', {
      style: style
    });
    cardCvvComponent.mount('#card-cvv-component');

    components.on('blur', (response) => {
      acquired.showComponentErrorMessage('.component-error', response);
      const messageContainer = document.querySelector('#error-message');
      messageContainer.textContent = JSON.stringify(response);
    })

    const form = document.getElementById('payment-form');

    const confirmParams = {          
      payment:{
        reference:"test"
      },
      customer: {
          first_name: "Edward",
          last_name: "Johnson",
          dob: "1988-01-01",
          ip: "127.0.0.1",
          custom_data: "L3BheW1lbnQtbGlua3MgcGF5IGN1c3RvbV9kYXRh",
          billing: {
              address: {
                  "line_1": "Flat 7",
                  "line_2": "Acacia Avenue",
                  "city": "Sparsholt",
                  "state": "state",
                  "postcode": "GU31 2ZZ",
                  "country_code": "GB"
              },
              email: "",
              phone: {
                  "country_code": "",
                  "number": ""
              }
          }
      },
      webhook_url: ''
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const response = await acquired.confirmPayment({
        components,
        confirmParams: confirmParams,
      });

      if(response.isTdsPending()){
        window.location.href = response.data.redirect_url;
      }
      if(response.isSuccess()){
        const messageContainer = document.querySelector('#error-message');
        messageContainer.textContent = JSON.stringify(response.data);
      }
      if(response.isError()){
        acquired.showComponentErrorMessage('.component-error', response.data);
        const messageContainer = document.querySelector('#error-message');
        messageContainer.textContent = JSON.stringify(response.data);
      }
    });
  })();
  
}