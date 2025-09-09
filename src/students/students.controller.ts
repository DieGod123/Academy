import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentsController {

    @Get()
    getStudents() {
        return 'Students';
    }

    @Post()
    createStudent(@Body() body: any) {
        return 'Student created';
    }

    @Put(':id')
    updateStudent(@Param('id') id: string, @Body() body: any) {
        return 'Student updated';
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: string) {
        if (!id || isNaN(Number(id))) {
            return 'ID inválido para eliminar el estudiante';
        }
        return 'Student deleted';
    }
}
