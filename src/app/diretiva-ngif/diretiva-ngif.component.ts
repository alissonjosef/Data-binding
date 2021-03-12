import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

<<<<<<< HEAD
  curso: string[] = [];
=======
  cursos: string[] = ["Angular 2"];

  mostrarCursos: boolean = false;

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }
>>>>>>> ad94330900f9650cfc5f8248d493c75fbf32dddd

  constructor() { }

  ngOnInit(): void {
  }

}
