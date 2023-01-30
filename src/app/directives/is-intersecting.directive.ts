import { Directive,ElementRef,Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appIsIntersecting]'
})
export class IsIntersectingDirective{
  @Output() isIntersecting = new EventEmitter<boolean>()
  private elementHtml:Element | undefined = undefined

  constructor(
    private element: ElementRef
  ) {
    this.elementHtml = this.element.nativeElement
    this.createAndObserve()
  }

  createAndObserve() {
    return new Observable<boolean>(suscriber => {
      const observer = new IntersectionObserver(entries => {
        const { isIntersecting } = entries[0]
        suscriber.next(isIntersecting)
      },{})

      if(this.elementHtml) {
        observer.observe(this.elementHtml)
      }
    })
    .subscribe(status => {
      this.isIntersecting.emit(status)
    })
  }

}
