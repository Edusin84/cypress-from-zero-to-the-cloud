// describe: Agrupa una serie de tests (suite de pruebas).
describe('TAT Customer Service Center', () => {

  // beforeEach: Ejecuta las instrucciones dentro de este bloque antes de cada test ('it') individual.
  beforeEach(() => {
    // cy.visit: Navega a la URL especificada.
    cy.visit('src/index.html')
  })

  // it: Define un caso de prueba (test case) individual.
  it('checks the application title', () => {
      // (Nota: cy.visit ya fue explicado arriba, así que no pongo comentario aquí)
      cy.visit('src/index.html')

      // cy.title: Obtiene el título de la página actual.
      // .should: Realiza una aserción (comprobación). Aquí verifica que el título sea igual al texto dado.
      cy.title().should('be.equal', 'TAT Customer Service Center')
  })

  it('fills in the required fields and submits the form', () => {

    // cy.get: Selecciona uno o más elementos del DOM usando selectores CSS (como 'span[class="success"]').
    cy.get('span[class="success"]')
    .should('be.not.visible')

    cy.get('input[id="firstName"]')
    .should('be.visible')
    // .type: Escribe el texto proporcionado dentro del elemento seleccionado (input).
    .type('Edu')
    .should('have.value', 'Edu')

    cy.get('input[id="lastName"]')
    .should('be.visible')
    .type('Carrero')
    .should('have.value', 'Carrero')

    cy.get('input[id="email"]')
    .should('be.visible')
    .type('edu@gmail.com')
    .should('have.value', 'edu@gmail.com')

    cy.get('textarea[id="open-text-area"]')
    .should('be.visible')
    .type('In the test from the previous lesson, move the visit command to the beforeEach() hook.Just below the existing test, add a new test, called fills in the required fields and submits the form.The test must combine the commands cy.get(), .type(), and .click(), to type some data in the fields First name, Last name, Email and How ​​can we help you? Any praise or feedback for us?, in addition to clicking the Send button.After the click, a success message should be displayed (this message must be contained in an element with the success class 🙊). Check that such a message is visible (.should', {delay: 0})
    .should('have.value', 'In the test from the previous lesson, move the visit command to the beforeEach() hook.Just below the existing test, add a new test, called fills in the required fields and submits the form.The test must combine the commands cy.get(), .type(), and .click(), to type some data in the fields First name, Last name, Email and How ​​can we help you? Any praise or feedback for us?, in addition to clicking the Send button.After the click, a success message should be displayed (this message must be contained in an element with the success class 🙊). Check that such a message is visible (.should')

    // cy.contains: Busca un elemento que contenga un texto específico (útil para buscar botones por su nombre).
    cy.contains('button', 'Send')
    .should('be.visible')
    // .click: Hace clic en el elemento seleccionado.
    .click()

    cy.get('span[class="success"]')
    .should('be.visible')
  })

  it('displays an error message when submitting the form with an email with invalid formatting', () => {

    cy.get('span[class="error"]')
    .should('be.not.visible')

      cy.get('input[id="firstName"]')
    .should('be.visible')
    .type('Edu')
    .should('have.value', 'Edu')

    cy.get('input[id="lastName"]')
    .should('be.visible')
    .type('Carrero')
    .should('have.value', 'Carrero')

    cy.get('input[id="email"]')
    .should('be.visible')
    .type('gmail.com')
    .should('have.value', 'gmail.com')

    cy.get('textarea[id="open-text-area"]')
    .should('be.visible')
    .type('test')
    .should('have.value', 'test')

    cy.contains('button', 'Send')
    .should('be.visible')
    .click()

    cy.get('span[class="error"]')
    .should('be.visible')
  })

  it('fills in the phone number field with no numbers', () => {
    
    cy.get('input[id="phone"]')
    .type('numero')
    .should('have.not.value')
  })

  it('displays an error message when the phone becomes required but is not filled in before the form submission', () => {

    cy.get('span[class="error"]')
    .should('be.not.visible')

    cy.get('input[id="firstName"]')
    .should('be.visible')
    .type('Edu')
    .should('have.value', 'Edu')

    cy.get('input[id="lastName"]')
    .should('be.visible')
    .type('Carrero')
    .should('have.value', 'Carrero')

    cy.get('input[id="email"]')
    .should('be.visible')
    .type('gmail.com')
    .should('have.value', 'gmail.com')

    cy.get('input[id="phone-checkbox"]')
    // .check: Marca un checkbox o un radio button.
    .check()

    cy.get('input[id="phone"]')
    .should('has.not.value')

    cy.get('textarea[id="open-text-area"]')
    .should('be.visible')
    .type('test')
    .should('have.value', 'test')

    cy.contains('button', 'Send')
    .should('be.visible')
    .click()

    cy.get('span[class="error"]')
    .should('be.visible')
  })

  it('fills and clears the first name, last name, email, and phone fields', () => {

    cy.get('input[id="firstName"]')
    .should('has.not.value')
    .type('Edu')
    .should('have.value', 'Edu')
    // .clear: Borra el contenido de un campo de texto (input o textarea).
    .clear()
    .should('has.not.value')

    cy.get('input[id="lastName"]')
    .should('has.not.value')
    .type('Carrero')
    .should('have.value', 'Carrero')
    .clear()
    .should('has.not.value')

    cy.get('input[id="email"]')
    .should('has.not.value')
    .type('gmail.com')
    .should('have.value', 'gmail.com')
    .clear()
    .should('has.not.value')

    cy.get('textarea[id="open-text-area"]')
    .should('be.visible')
    .type('test')
    .should('have.value', 'test')
    .clear()
    .should('has.not.value')
  })

  it('displays an error message when submitting the form without filling the required fields', () => {

    cy.get('span[class="error"]')
    .should('be.not.visible')

    cy.contains('button', 'Send')
    .click()

    cy.get('span[class="error"]')
    .should('be.visible')
  })

  it('successfully submits the form using a custom command', () => {

    const data = {
      firstName: 'Edu',
      lastName: 'Carrero',
      email: 'edu@example.com',
      text: 'test'
    }

    // Este es un comando personalizado (Custom Command) que definiste en 'cypress/support/commands.js'. No viene por defecto en Cypress.
    cy.fillMandatoryFieldsAndSubmit(data)

    cy.get('span[class="success"]')
      .should('be.visible')
  })

  it('selects a product (YouTube) by its content', () => {
    
    cy.get('select')
    // .select: Selecciona una opción dentro de un elemento <select> (dropdown).
    .select('YouTube')
    .should('have.value', 'youtube')
  })

  it('selects a product (Mentorship) by its value', () => {

    cy.get('select')
    .select('mentorship')
    .should('have.value', 'mentorship')
  })

  it('selects a product (Blog) by its index', () => {

    cy.get('select')
    .select(1)
    .should('have.value', 'blog')
  })

  it('checks the type of service "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('be.checked')
  })

  it('checks each type of service', () => {
    cy.get('#support-type')
    // .find: Busca elementos hijos dentro del elemento previamente seleccionado.
    .find('input[type="radio"]')
    // .each: Itera sobre una lista de elementos encontrados (como un bucle for).
    .each((typeOfService) => {
      // cy.wrap: Envuelve un elemento del DOM nativo para poder usar comandos de Cypress sobre él.
      cy.wrap(typeOfService)
      .check()
      .should('be.checked')
    })
  })

  it('checks both checkboxes, then unchecks the last one', () => {
    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    // .last: Selecciona el último elemento de un grupo de elementos encontrados.
    .last()
    // .uncheck: Desmarca un checkbox.
    .uncheck()
    .should('be.not.checked') 
  })

  it('selects a file from the fixtures folder', () => {
    cy.get('input[type="file"]')
    // .selectFile: Sube un archivo a un input de tipo 'file'.
    .selectFile('cypress/fixtures/example.json')
    .should(input => {
      console.log(input)
      // expect: Una aserción explícita de estilo BDD (usada dentro de callbacks para comprobaciones complejas).
      expect(input[0].files[0].name).to.equal('example.json')
    })
  })

  it('selects a file simulating a drag-and-drop', () => {
    cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/example.json', {subjectType: 'drag-n-drop'}) //{ action: 'drag-drop'}
    .should(input => {
      console.log(input)
      expect(input[0].files[0].name).to.equal('example.json')
    })
  })

  it('selects a file using a fixture to which an alias was given', () => {
    // cy.fixture: Carga un archivo de datos (fixture) ubicado en la carpeta 'cypress/fixtures'.
    // .as: Asigna un alias (nombre temporal) al recurso para usarlo más adelante con '@'.
    cy.fixture('example.json').as('myExample')
    cy.get('input[type="file"]')
    .selectFile('@myExample')
    .should(input => {
      console.log(input)
      expect(input[0].files[0].name).to.equal('example.json')
    })
  })

  it('verifies that the privacy policy page opens in another tab without the need for a click', () => {
    cy.get('a[href="privacy.html"]')
    .should('have.attr', 'target', '_blank')
  })

  it('access the privacy policy page by removing the target, then clicking on the link', () => {
    cy.get('a[href="privacy.html"]')
    // .invoke: Llama a una función o modifica una propiedad del elemento seleccionado (aquí remueve el atributo target).
    .invoke('removeAttr', 'target')
    .click()
    .title().should('be.equal', 'TAT Customer Service Center - Privacy Policy')
  })

  it('independently test the privacy policy page', () => {
    cy.openPrivacyPage()
    cy.contains('p', 'We do not save data submitted in the TAT CSC application form.')
    .should('be.visible')
  })

})