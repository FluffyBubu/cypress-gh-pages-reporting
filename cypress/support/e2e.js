import './commands'

// Mochawesome Report - Add screenshots and videos to the HTML report
import addContext from 'mochawesome/addContext'

const titleToFileName = function () {
  title.replace(/[:/]/g, '')
}

Cypress.on('test:after:run', function (test, runnable) {
  if (test.state === 'failed') {
    let parent = runnable.parent
    let filename = ''
    while (parent && parent.title) {
      filename = `${titleToFileName(
        parent.title
      )} -- ${filename}`
      parent = parent.parent
    }
    filename += `${titleToFileName(
      test.title
    )} (failed).png`
    addContext(
      { test },
      `cypress/screenshots/${Cypress.spec.name}/${filename}`
    )
  }
  addContext({ test }, `cypress/videos/${Cypress.spec.name}.mp4`)
})