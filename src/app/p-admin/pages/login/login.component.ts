import { Component } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
// import type { AuthService } from "../services/auth.service"

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup
  loading = false
  error = ""

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    // private authService: AuthService,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    })

    // Redirect to admin dashboard if already logged in
    // if (this.authService.isAuthenticated()) {
    //   this.router.navigate(["/admin"])
    // }
  }

  get f() {
    return this.loginForm.controls
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return
    }

    this.loading = true
    this.error = ""

    try {
      // this.authService.login(this.f["username"].value, this.f["password"].value).subscribe({
      //   next: () => {
      //     // Get return url from route parameters or default to '/admin'
      //     const returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/admin"
      //     this.router.navigate([returnUrl])
      //   },
      //   error: (error) => {
      //     this.error = "Tên đăng nhập hoặc mật khẩu không đúng"
      //     this.loading = false
      //   },
      // })
    } catch (error) {
      this.error = "Tên đăng nhập hoặc mật khẩu không đúng"
      this.loading = false
    }
  }
}



