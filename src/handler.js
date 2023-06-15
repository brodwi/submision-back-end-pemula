const { nanoid } = require('nanoid');

const gunung = require('./notes');



const addNoteHandler = (request, h) => {

  const { nama, bentuk, tinggi_meter, estimasi_letusan, geolokasi, status, keamanan, gambar} = request.payload;

    const id = nanoid(16);

    const newNote = {
      id, nama, bentuk, tinggi_meter, estimasi_letusan, geolokasi, status, keamanan, gambar,
    };

      gunung.push(newNote);

      const isSuccess = gunung.filter((note) => note.id === id).length > 0;

      if (isSuccess) {

        const response = h.response({

          status: 'success',

          message: 'Data Gunung berhasil ditambahkan',

          data: {

            noteId: id,

          },

        });

        response.code(201);

        return response;

      }

      const response = h.response({

        status: 'fail',

        message: 'Data Gunung gagal ditambahkan',

      });

      response.code(500);

      return response;

};

const getAllNotesHandler = () => ({

    status: 'success',

    data: {

      gunung,

    },

   });

   const getNoteByIdHandler = (request, h) => {

    const { id } = request.params;

   

    const note = gunung.filter((n) => n.id === id)[0];

    if (note !== undefined) {

        return {

          status: 'success',

          data: {

            note,

          },

        };

      }

      const response = h.response({

        status: 'fail',

        message: 'Data Gunung tidak ditemukan',

      });

      response.code(404);

      return response;

  };  

  const editNoteByIdHandler = (request, h) => {

    const { id } = request.params;

    const { nama, bentuk, tinggi_meter, estimasi_letusan, geolokasi, status, keamanan, gambar } = request.payload;


    const index = gunung.findIndex((note) => note.id === id);

    if (index !== -1) {

        gunung[index] = {

          ...gunung[index],

          nama,

          bentuk,

          tinggi_meter,

          estimasi_letusan,

          geolokasi,

          status,

          keamanan,

          gambar,

        };

        const response = h.response({

          status: 'success',

          message: 'Data Gunung berhasil diperbarui',

        });

        response.code(200);

        return response;

      }

      const response = h.response({

        status: 'fail',

        message: 'Gagal memperbarui Data. Id tidak ditemukan',

      });

      response.code(404);

      return response;

  };

  const deleteNoteByIdHandler = (request, h) => {

    const { id } = request.params;

   

    const index = gunung.findIndex((note) => note.id === id);

   

    if (index !== -1) {

      gunung.splice(index, 1);

      const response = h.response({

        status: 'success',

        message: 'Data Gunung berhasil dihapus',

      });

      response.code(200);

      return response;

    }

    const response = h.response({

        status: 'fail',

        message: 'Data gagal dihapus. Id tidak ditemukan',

      });

      response.code(404);

      return response;

  };

module.exports = {

  addNoteHandler,

  getAllNotesHandler,

  getNoteByIdHandler,

  editNoteByIdHandler,

  deleteNoteByIdHandler,

};