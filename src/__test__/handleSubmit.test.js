/**
 * @jest-environment jsdom
 */


const { handleSubmit } = require("../client/views/js/handleSubmit")

describe('handleSubmit', ()=> {
    it('returns something', () => {
        expect(handleSubmit).toBeDefined();
    })
})