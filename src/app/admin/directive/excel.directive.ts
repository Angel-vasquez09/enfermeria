import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2'

@Directive({
  selector: '[appExcel]',
  exportAs: 'readexcel',
})
export class ExcelDirective {

  excelObservable!: Observable<any>;
  @Output() eventEmitter = new EventEmitter();

  constructor() { }

  @HostListener('change', ['$event.target'])
  onChange(target: HTMLInputElement) {
    let name = target.files![0].name.split('.');
    if(name[1] !== 'xlsx'){
      Swal.fire(
        'Error!',
        'Algo salio mal!, Solo archivos .xlsx',
        'error'
      )
      target.value = '';
      return;
    }

    const file = target.files![0];

    this.excelObservable = new Observable((subs: Subscriber<any>) => {
      this.readFile(file, subs);
    })

    this.excelObservable.subscribe((data) => {
      this.eventEmitter.emit(data);
    })


  }

  readFile(file: File, subs: Subscriber<any>){
    const reader = new FileReader();
    reader.readAsArrayBuffer(file)
    reader.onload = (e) => {
      const data = e.target!.result;
      const workbook: XLSX.WorkBook = XLSX.read(data, {type: 'buffer'});
      //* Hoja de estudiante
      const first_sheet_name = workbook.SheetNames[0];
      //* Hoja de notas
      const hojaNotas = workbook.SheetNames[1]
      //* Hoja de profesores
      const hojaProfesores = workbook.SheetNames[2]
      //? Hojas de calculo
      const worksheetNotas = workbook.Sheets[hojaNotas];
      const worksheetProfesores = workbook.Sheets[hojaProfesores];
      const worksheet = workbook.Sheets[first_sheet_name]; //* Estudiantes
      const json = XLSX.utils.sheet_to_json(worksheet);
      const jsonNotas = XLSX.utils.sheet_to_json(worksheetNotas);
      const jsonProfesores = XLSX.utils.sheet_to_json(worksheetProfesores);
      const concatenarHojas = [
        {
          estudiantes: json,
          notas: jsonNotas,
          profesores: jsonProfesores
        }
      ];
      subs.next(concatenarHojas);
      subs.complete();
    }

  }
}
