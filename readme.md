# foldshandler - @cesart050892

Manejo de varias carpeta

Installation
----

```bash
npm install --save foldshandler
```

Example
====

```javascript
const fh = require('foldshandler');
const {DIR, PREFIX} = require('./data.json')

const commands = fh(DIR);

function message(command, args) {
  if(!command.startsWith(PREFIX)) return;
  command = command.toLowerCase().slice(PREFIX.length);
  const cmd = commands.find(({ name }) => name === command);
  if (!cmd) return console.log("Ese comando no existe");
  if(cmd.private) return console.log('No tienes permiso')
  cmd.execute(commands, args);
}

const msg = ">Help";
message(msg, "Hola");
```

Commands - (help)
====
```javascript
module.exports={
    name:"help",
    description: "Ayuda de commandos",
    execute: async function (commands, args){
      for(const cmd of commands){
        if(!cmd.private) {
          console.log({
            name: cmd.name,
            description: cmd.description
          })
        }
      }
    }
  }
```

Data JSON
====
```javascript
{
  "DIR":"./commands",
  "PREFIX":">"
}
```
