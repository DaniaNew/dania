//Roles:
// 1: admin,
// 2: cliente

function obtenerListaUsuarios(){
  var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));
  
  if(listaUsuarios == null){
  listaUsuarios =
    [
      // id, nombre, apellido, correo,                     contraseña, fecha nac, rol
      ['1', 'Dania', 'Nina', 'ninayoselin94@gmail.com', '1dania2','1987-10-12','1'],
      ['2', 'Rocio', 'Mayta', 'chiomusic@gmail.com', 'chio45', '1993-04-17', '2']
    ]
  }
  return listaUsuarios;
  }
  function validarCredenciales(pCorreo, pContrasenna) { 
      var listaUsuarios = obtenerListaUsuarios();
      var bAcceso = false;
  
  for(var i = 0; i < listaUsuarios.length; i++){
  
  if(pCorreo == listaUsuarios[i][3] && pContrasenna == listaUsuarios [i] [4]){
      bAcceso = true; 
      sessionStorage.setItem('usuarioActivo', listaUsuarios [i] [1] + ''+ listaUsuarios [i] [2]); 
      sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][6]);
        }
  }
  return bAcceso;
  }