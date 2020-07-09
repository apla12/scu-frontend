import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Usuario[] = [];

  listForm = this.fb.group({
    nome: new FormControl(null, [Validators.required]),
    login: new FormControl(null, [Validators.required]),
    senha: new FormControl(null, [Validators.required]),
  });


  constructor(private fb: FormBuilder, private router: Router, private service: UsuarioService) { }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe( resposta => this.usuarios = resposta );
  }

  cadastrarUsuario(){
    this.router.navigate(['/add']);
  }

}
