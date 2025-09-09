import { Injectable } from '@nestjs/common';

export interface Student {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  email: string;
  carrera: string;
  semestre: number;
}

@Injectable()
export class StudentsService {
  private students: Student[] = [
    {
      id: 1,
      nombre: 'Ana',
      apellido: 'García',
      edad: 20,
      email: 'ana.garcia@email.com',
      carrera: 'Ingeniería de Sistemas',
      semestre: 5
    },
    {
      id: 2,
      nombre: 'Carlos',
      apellido: 'López',
      edad: 22,
      email: 'carlos.lopez@email.com',
      carrera: 'Medicina',
      semestre: 8
    },
    {
      id: 3,
      nombre: 'María',
      apellido: 'Rodríguez',
      edad: 19,
      email: 'maria.rodriguez@email.com',
      carrera: 'Psicología',
      semestre: 3
    },
    {
      id: 4,
      nombre: 'Diego',
      apellido: 'Martínez',
      edad: 21,
      email: 'diego.martinez@email.com',
      carrera: 'Administración de Empresas',
      semestre: 6
    },
    {
      id: 5,
      nombre: 'Sofía',
      apellido: 'Hernández',
      edad: 20,
      email: 'sofia.hernandez@email.com',
      carrera: 'Derecho',
      semestre: 4
    }
  ];

  getAllStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find(student => student.id === id);
  }

  createStudent(studentData: Omit<Student, 'id'>): Student {
    const newId = Math.max(...this.students.map(s => s.id)) + 1;
    const newStudent: Student = {
      id: newId,
      ...studentData
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(id: number, studentData: Partial<Omit<Student, 'id'>>): Student | null {
    const studentIndex = this.students.findIndex(student => student.id === id);
    if (studentIndex === -1) {
      return null;
    }
    
    this.students[studentIndex] = {
      ...this.students[studentIndex],
      ...studentData
    };
    
    return this.students[studentIndex];
  }

  deleteStudent(id: number): boolean {
    const studentIndex = this.students.findIndex(student => student.id === id);
    if (studentIndex === -1) {
      return false;
    }
    
    this.students.splice(studentIndex, 1);
    return true;
  }
}
