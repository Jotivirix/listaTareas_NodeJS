const fs = require('fs');
const { rejects } = require('assert');
const { resolve } = require('path');

let tasksToDo = [];

const saveDB = () => {
    //Pasamos el Array a JSON
    let data = JSON.stringify(tasksToDo);
    fs.writeFile('db/data.json',data, (error) => {
        if(error){
            reject('Se ha producido un error al guardar la tarea');
        } else {
            console.log('TAREA GUARDADA');
            resolve('Lista de tareas actualizada correctamente');
        }
    });
}

const loadDB = () => {
    try {
        tasksToDo = require('../db/data.json');        
    } catch (error) {
        tasksToDo = [];
    }
}

const crear = (descripcion) => {
    loadDB();    
    let task = {
        descripcion: descripcion,
        completado: false
    }
    tasksToDo.push(task);
    saveDB();
    return task;
}

const getListado = () => {    
    loadDB();
    return tasksToDo;
}

const update = (descripcion, completado = true) => {
    //Obtenemos las tareas
    loadDB();

    //Buscamos la posicion de la tarea que coincida con nuestra descripcion
    let index = tasksToDo.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if(index >= 0){
        tasksToDo[index].completado = completado;
        saveDB();
        return true;
    }
    else{
        console.log('No se encuentra ninguna tarea con la descripcion');
        return false;
    }
}

const borra = (descripcion) => {

    //Obtenemos las tareas
    loadDB();

    //Buscamos la posicion de la tarea que coincida con nuestra descripcion
    let index = tasksToDo.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if(index >= 0){
        tasksToDo.splice(index,1);
        saveDB();
        return true;
    }
    else{
        console.log('No se encuentra ninguna tarea con la descripcion');
        return false;
    }


}

module.exports = {
    crear, getListado, update, borra
}
