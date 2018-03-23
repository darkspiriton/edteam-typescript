import { JsonController, Get, Param } from 'routing-controllers';
import { Libro } from '../modelo/libro';

@JsonController()
export class BibliotecaController {

    LIBROS: Libro[] = [
        {
            id: 1,
            titulo: 'Historia del Tiempo',
            autor: 'Stephen Hawking'
        }
    ];

    constructor() {}

    // GET /libros
    @Get('/libros')
    getLibros() {
        return this.LIBROS;
    }

    // GET /libro/historia
    @Get('/libro/:titulo')
    getLibroPorTitulo(@Param('titulo') titulo: string) {
        // Biblioteca.buscarPorTitulo(titulo)
        console.log('Buscando: ', titulo);
        return this.LIBROS[0];
    }
}