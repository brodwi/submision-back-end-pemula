const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');
const routes = [
    {
      method: 'POST',
      path: '/gunung',
      handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/gunung',
        handler: getAllNotesHandler,
     },
     {
        method: 'GET',
        path: '/gunung/{id}',
        handler: getNoteByIdHandler,
      },
      {
        method: 'PUT',
        path: '/gunung/{id}',
        handler: editNoteByIdHandler,
      },
      {
        method: 'DELETE',
        path: '/gunung/{id}',
        handler: deleteNoteByIdHandler,
      },
  ];
   
  module.exports = routes;
