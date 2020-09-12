const options = {
    descripcion: {
        demand: true,
        alias: 'd',
        des: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,        
        des: 'Define el estado de la tarea'
    }
}


const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer', options)
    .command('actualizar', 'Actualiza la tarea a completada', options)
    .command('borrar', 'Borra la tarea', options)
    .help().argv;

module.exports = {
    argv
}