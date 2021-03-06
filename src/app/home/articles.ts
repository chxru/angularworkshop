export interface Article {
  author: string;
  type: string;
  tags: string[];
  title: string;
  content: string;
  image: string;
  comments: string[];
}

export const articles: Article[] = [
  {
    author: 'Tobye Byrth',
    type: 'Comedy|Crime|Drama|Musical',
    tags: ['Canada'],
    title: 'Trip to China',
    content:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    image: 'http://dummyimage.com/207x100.png/dddddd/000000',
    comments: [
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    ],
  },
  {
    author: 'Brade Virgo',
    type: 'Drama',
    tags: ['China', 'France', 'Mexico'],
    title: 'Trip to Ecuador',
    content:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    image: 'http://dummyimage.com/138x100.png/cc0000/ffffff',
    comments: [
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    ],
  },
  {
    author: 'Myron Bolzmann',
    type: 'Crime|Drama|Thriller',
    tags: ['Palestinian Territory', 'Dominican Republic'],
    title: 'Trip to Philippines',
    content:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    image: 'http://dummyimage.com/225x100.png/dddddd/000000',
    comments: [],
  },
  {
    author: 'Beatrice Davidescu',
    type: 'Drama',
    tags: ['China', 'United States', 'Pakistan'],
    title: 'Trip to Philippines',
    content:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    image: 'http://dummyimage.com/188x100.png/5fa2dd/ffffff',
    comments: [],
  },
  {
    author: 'Engelbert Cuolahan',
    type: 'Adventure|Comedy',
    tags: ['Poland', 'China', 'Mozambique'],
    title: 'Trip to China',
    content:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    image: 'http://dummyimage.com/130x100.png/cc0000/ffffff',
    comments: [
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
      'Aliquam erat volutpat. In congue. Etiam justo.',
      'In congue. Etiam justo. Etiam pretium iaculis justo.',
    ],
  },
  {
    author: 'Mandi Walhedd',
    type: 'Comedy',
    tags: ['Brazil', 'Malaysia', 'Indonesia'],
    title: 'Trip to South Africa',
    content:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    image: 'http://dummyimage.com/197x100.png/ff4444/ffffff',
    comments: [
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    ],
  },
  {
    author: 'Lauraine Polk',
    type: 'Comedy|Sci-Fi',
    tags: ['Japan', 'Japan', 'Thailand'],
    title: 'Trip to Vietnam',
    content:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    image: 'http://dummyimage.com/171x100.png/5fa2dd/ffffff',
    comments: [
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    ],
  },
  {
    author: 'Netti Chinnock',
    type: 'Comedy',
    tags: ['Egypt'],
    title: 'Trip to Poland',
    content:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    image: 'http://dummyimage.com/172x100.png/cc0000/ffffff',
    comments: [
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    ],
  },
  {
    author: 'Aprilette Ferie',
    type: 'Drama|Romance',
    tags: ['Philippines', 'China'],
    title: 'Trip to China',
    content:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    image: 'http://dummyimage.com/237x100.png/dddddd/000000',
    comments: [
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      'Etiam faucibus cursus urna.',
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    ],
  },
  {
    author: 'Dion Klich',
    type: 'Horror',
    tags: ['Sweden', 'Philippines', 'Colombia'],
    title: 'Trip to Philippines',
    content:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    image: 'http://dummyimage.com/211x100.png/5fa2dd/ffffff',
    comments: [
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    ],
  },
];
