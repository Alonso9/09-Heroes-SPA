import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const HoreosApp = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}

/*
  En el auth creamos un contexto, el contexto nos dara informacion si el usuario esta autenticado o no, 
  para eso creamos su contexto para manejar ese estado y un Reducer para manejar los casos y que acciones puede hacer ese contexto y provide (este caso son
  login y logout)
*/