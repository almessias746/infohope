import { Artigo } from './../../../models/artigo.model';
import { ArtigoService } from './../../../services/artigo.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {

  artigos$: Observable<Artigo[]>;
  edit: boolean;
  displayDialogArtigo: boolean;
  form: FormGroup;
  tipos: SelectItem[];


  constructor(private artigoService: ArtigoService, private fb: FormBuilder) {
    this.tipos = [
      {label: 'Restrito', value: 'Restrito'},
      {label: 'Livre', value: 'Livre'}
  ];
   }

  ngOnInit(): void {
    this.artigos$ = this.artigoService.list();
    this.configForm();
  }

  configForm(): void {
    this.form = this.fb.group({
      id: new FormControl(),
      title: new FormControl('', Validators.required),
      key: new FormControl('', Validators.required),
      date: new FormControl(''),
      content: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      perfil: new FormControl('')
    });
  }

  add(): void {
    this.form.reset();
    this.edit = false;
    this.displayDialogArtigo = true;
  }

  selecionaArtigo(artigo: Artigo): void {
    this.edit = true;
    this.displayDialogArtigo = true;
    console.log(artigo);
    this.form.setValue(artigo);
  }

  save(): void {
    this.artigoService.createOrUpdate(this.form.value)
      .then(() => {
        this.displayDialogArtigo = false;
        Swal.fire(`Artigo ${!this.edit ? 'salvo' : 'atualizado'} com sucesso.`, '', 'success');
      })
      .catch((erro) => {
        this.displayDialogArtigo = false;
        Swal.fire(`Erro ao ${!this.edit ? 'salvo' : 'atualizado'} o artigo.`, `Detalhes: ${erro}`, 'error');
      });
    this.form.reset();
  }

  delete(artg: Artigo): void {
    Swal.fire({
      title: 'Confirma a exclusão do artigo?',
      text: "",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        this.artigoService.delete(artg.id)
          .then(() => {
            Swal.fire('Artigo excluído com sucesso!', '', 'success');
          });
      }
    });
  }

}
