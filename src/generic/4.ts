/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

// class Component {
//   constructor (public props:T) {

//   }
// }

// class Page extends Component {
//   pageInfo () {
//     console.log(this.props.title);
//   }
// }

// export {};

interface ComponentProps {
  // властивості, які очікується
}

class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

class PageProps {
  title: string;
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}