const argv = require('./config/yargs').argv;
const toDo = require('./tasksToDo/taskToDo');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = toDo.getListado();

        console.log('===== LISTADO DE TAREAS ===='.green);
        for (let tarea of listado) {
            console.log(tarea.descripcion);
            if (!tarea.completado) {
                console.log("Estado: " + "SIN COMPLETAR".red);
            }
            else {
                console.log("Estado: " + "Completada".green);
            }
            console.log("============================".green);
        }
        break;
    case 'actualizar':
        let update = toDo.update(argv.descripcion, argv.completado);
        console.log(update);
        break;
    case 'borrar':
        let borrado = toDo.borra(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}