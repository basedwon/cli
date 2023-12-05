const cli = require('../lib/main')

describe('CLI Wrapper Tests', () => {
  describe('Shelljs Integration', () => {
    it('should have shelljs integrated', () => {
      expect(cli.shell).to.not.be.undefined
      expect(typeof cli.shell.exec).to.equal('function')
    })
  })

  describe('Prompts Integration', () => {
    it('should have prompts integrated', () => {
      expect(cli.prompts).to.not.be.undefined
      expect(typeof cli.prompts).to.equal('function')
    })
  })

  describe('CLI-Color Integration', () => {
    it('should have cli-color integrated', () => {
      expect(cli.colors).to.not.be.undefined
    })
  })

  describe('Commander Integration', () => {
    it('should have commander integrated', () => {
      expect(cli.Commander).to.not.be.undefined
      expect(typeof cli.Commander.program).to.equal('object')
    })
    it('should have commander singleton integrated', () => {
      expect(cli.program).to.not.be.undefined
      expect(typeof cli.program.program).to.equal('object')
    })
  })

  describe('@basd/spinner Integration', () => {
    it('should have @basd/spinner integrated', () => {
      expect(cli.Spinner).to.not.be.undefined
      expect(typeof cli.Spinner).to.equal('function')
      expect(typeof cli.spinner).to.equal('object')
      expect(typeof cli.Progress).to.equal('function')
    })
  })
})
