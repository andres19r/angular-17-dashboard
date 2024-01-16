import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id)),
    ),
  );

  public titleLabel = computed(() =>
    this.user()
      ? `${this.user()?.first_name} ${this.user()?.last_name}`
      : 'User information',
  );

  // constructor() {
  //   this.route.params.subscribe((params) => {
  //     console.log({ params });
  //   });
  // }
}
