class IocContainer {
    private services;

    constructor () {
      this.services = {}
    }

    public service (name: string, callbackFunciton: Function): IocContainer {
      Object.defineProperty(this, name, {
        get: () => {
          if (!Object.prototype.hasOwnProperty.call(this.service, name)) {
            this.services[name] = callbackFunciton(this)
          }

          return this.services[name]
        },
        configurable: true,
        enumerable: true
      })

      return this
    }

    public get (name: string): any {
      return this[name]
    }
}

export default IocContainer
