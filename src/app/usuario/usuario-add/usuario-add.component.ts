import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuario } from '../usuario';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.scss']
})
export class UsuarioAddComponent implements OnInit {

  usuario: Usuario;
  mensagem: string;

  addForm = this.fb.group({
    nome: new FormControl(null, [Validators.required]),
    login: new FormControl(null, [Validators.required]),
    senha: new FormControl(null, [Validators.required]),
  });

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private service: UsuarioService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    const usuario = new Usuario();
    usuario.nome = this.addForm.get('nome').value;
    usuario.login = this.addForm.get('login').value;
    usuario.senha = btoa(this.addForm.get('senha').value);

    this.service.salvar(usuario).subscribe(
      response => {
        this.usuario = response;
        this.mensagem = 'Usuario cadastrado com sucesso!'

        this.router.navigate(['/list']);
      
      }, HttpErrorResponse => {
        this.mensagem = 'Erro ao cadastrar usuário. Tente novamente.';
      })
  }

  listarUsuarios() {
    this.router.navigate(['/list']);
  }

}
