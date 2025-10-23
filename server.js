const { Ignitor } = require('@adonisjs/core/build/standalone')
new Ignitor(require('@adonisjs/fold')).httpServer().start().catch(console.error)
