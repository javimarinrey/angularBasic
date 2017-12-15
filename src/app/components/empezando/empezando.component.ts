import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empezando',
  templateUrl: './empezando.component.html',
  styleUrls: ['./empezando.component.css']
})
export class EmpezandoComponent implements OnInit {

  code: string = `
RewriteEngine on
# Don't rewrite files or directories
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Rewrite everything else to index.html to allow html5 state links
RewriteRule ^ index.html [L]`;

  constructor() { }

  ngOnInit() {
  }

}
