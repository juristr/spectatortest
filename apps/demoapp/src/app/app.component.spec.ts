import { createComponentFactory, byTestId } from '@ngneat/spectator';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { MessageService } from './message.service';

describe('AppComponent', () => {
  const createComponent = createComponentFactory({
    component: AppComponent,
    providers: [
      // the spec fails if there is not provider mocked at this level
      {
        provide: MessageService,
        useValue: {
          getMessage: () => of('hi'),
        },
      },
    ],
  });

  it('should create the app', () => {
    const spectator = createComponent({
      providers: [
        {
          provide: MessageService,
          useValue: {
            getMessage: () => of('hi there'),
          },
        },
      ],
    });
    expect(spectator.query(byTestId('hello-msg')).innerHTML).toBe('hi there');
  });
});
