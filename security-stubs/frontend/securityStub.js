// ===========================  Stub pour simuler une zone restreinte =====================
export const RestrictedAreaStub = {
    template: `
      <div class="restricted-area">
        <h3>Restricted Area</h3>
        <div v-if="isAuthorized">
          <slot></slot>
        </div>
        <div v-else class="unauthorized">
          <p>You don't have permission to access this content.</p>
          <button @click="redirectToLogin">Login</button>
        </div>
      </div>
    `,
    props: {
      requiredRole: {
        type: String,
        default: 'user'
      },
      // Simuler différents états d'autorisation
      isAuthorized: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      redirectToLogin() {
        console.log('Redirecting to login page');
        // Dans un environnement réel, ceci redirigerait avec this.$router.push
      }
    }
  };
  
  // Stub pour simuler la validation des formulaires
  export const FormValidationStub = {
    install(Vue) {
      Vue.directive('validate', {
        bind(el, binding) {
          el.addEventListener('submit', (event) => {
            // Simuler la validation du formulaire
            const inputs = el.querySelectorAll('input, textarea, select');
            let isValid = true;
            
            inputs.forEach(input => {
              if (input.hasAttribute('required') && !input.value) {
                isValid = false;
                input.classList.add('error');
              }
              
              // Simuler la détection XSS
              if (input.value && input.value.includes('<script>')) {
                isValid = false;
                input.classList.add('security-error');
                console.error('Potential XSS detected');
              }
            });
            
            if (!isValid) {
              event.preventDefault();
              console.error('Form validation failed');
            }
          });
        }
      });
    }
  };