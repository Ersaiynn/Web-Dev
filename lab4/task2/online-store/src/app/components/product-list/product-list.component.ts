import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  categories = [
  { id: 1, name: 'Автотовары', image: 'https://kaspi.kz/img/externalImg/Avto.png', link: 'https://kaspi.kz/' },
  { id: 2, name: 'Мебель', image: 'https://kaspi.kz/img/externalImg/Furniture1.png', link: 'https://kaspi.kz/' },
  { id: 3, name: 'Супермаркеты', image: 'https://kaspi.kz/img/externalImg/Grocery.png', link: 'https://kaspi.kz/' },
  { id: 4, name: 'Строительство', image: 'https://kaspi.kz/img/externalImg/Hard.png', link: 'https://kaspi.kz/' },
  { id: 5, name: 'Аптеки', image: 'https://kaspi.kz/img/externalImg/Pharmcy.png', link: 'https://kaspi.kz/' },
  { id: 6, name: 'Досуг, книги', image: 'https://kaspi.kz/img/externalImg/Hobby.png', link: 'https://kaspi.kz/' },
  { id: 7, name: 'Канцтовары', image: 'https://kaspi.kz/img/externalImg/Stat.png', link: 'https://kaspi.kz/' },
  { id: 8, name: 'Товары для дома', image: 'https://kaspi.kz/img/externalImg/Home.png', link: 'https://kaspi.kz/' },
  { id: 9, name: 'Детские товары', image: 'https://kaspi.kz/img/externalImg/Kids.png', link: 'https://kaspi.kz/' },
  { id: 10, name: 'Бытовая техника', image: 'https://kaspi.kz/img/externalImg/HomeApp.png', link: 'https://kaspi.kz/' },
];

  // ВАЖНО: заменишь link/image/images на реальные с kaspi.kz
  products: Product[] = [
    {
      id: 1,
      name: 'SX салфетка ',
      description: 'Салфетка для мойки автомобилей SX — незаменимый помощник для идеальной чистоты вашего автомобиля, обеспечивающий высокую эффективность и удобство использования.',
      price: 2990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0b/p87/13949893.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf2/p56/13949894.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pd2/p86/13949895.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/p86/13949896.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/sx-salfetka-137753-1-sht-105882014/?c=471810000',
    },
    {
      id: 2,
      name: 'Игрушка',
      description: 'Парная фигурка с шарами — оригинальный аксессуар для вашего автомобиля, который добавит уют и индивидуальность в интерьер.',
      price: 3990,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/hfc/85943296819230.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb7/hd3/85943296884766.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1a/ha0/85943296950302.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he7/h31/85944542199838.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/igrushka-7490466527-119102364/?c=471810000',
    },
    {
      id: 3,
      name: 'Тапочки белый',
      description: 'Тапочки Merant — символ домашнего уюта, который сочетает в себе современный дизайн и практичность. Эти тапочки созданы для того, чтобы дарить вам комфорт и тепло в любое время года.',
      price: 6990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p06/pc2/70277387.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p3f/pc2/70277389.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc7/pc4/70277391.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pff/pc4/70277393.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/tapochki-632047-belyi-38-39-115551442/?c=471810000&hasVariants=true',
    },
    {
      id: 4,
      name: 'Ботинки черный',
      description: 'Ботинки 733835216-22-1 — стильный выбор для зимнего сезона, который сочетает комфорт и современный дизайн. Эти ботинки идеально подойдут как для повседневных прогулок, так и для деловых встреч.',
      price: 25990,
      rating: 4.1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/he7/87062361571358.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5c/h00/87062361702430.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h5d/87062361899038.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h46/h63/87062362030110.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/botinki-30111466-733835216-chernyi-36-123304601/?c=471810000&hasVariants=true',
    },
    {
      id: 5,
      name: 'Электрогирлянда Водопад',
      description: 'Электрогирлянда Водопад, штора Led Light цвет свечения теплый белый 3 м',
      price: 3990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0c/pa5/17727102.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf0/pa4/17727103.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd4/pa4/17727104.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9b/pa4/17727106.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/vodopad-shtora-led-light-tsvet-svechenija-teplyi-belyi-3-m-114166074/?c=471810000',
    },
    {
      id: 6,
      name: 'Новогодняя елка ЕЛКА МАРКЕТ пушистая 120 см, ПВХ',
      description: 'Ёлка 120 см со снежным напылением в фирменной коробке Fnix',
      price: 39990,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa5/p92/77658472.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2a/hab/64061246668830.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p50/p92/77658475.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pae/p8e/77658487.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/novogodnjaja-elka-elka-market-pushistaja-120-sm-pvh-100769416/?c=471810000',
    },
    {
      id: 7,
      name: 'Мышь LS Pro черный',
      description: 'Беспроводная черная матовая (Soft-touch покрытие) блютуз (bluetooth) мышь c светодиодной RGB подсветкой',
      price: 7490,
      rating: 3.9,
      image: 'https://www.futurama.co.za/media/catalog/product/cache/ecd08c998766ed656774fbfdfeece653/p/r/pro-wireless-carbon-gallery-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h20/h05/82330895024158.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h59/82330895351838.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h59/82330895351838.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/ls-pro-chernyi-107622516/?c=471810000',
    },
    {
      id: 8,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений.',
      price: 199990,
      rating: 4.8,
      image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-finish-select-202503-silver-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=aHYyeWZ6TVBzTWw5WlZ2bFJCZno2aG1NVnhJaVErcFhXcDJFUzZhbVJBcUs1Y3FhVmdUUHEzOFNOVmNXd2trNmwrYlNkK0J5ZDZzOExOSm1DaDV3L3pBSHlqQStCOGVBOUJkSkVqU0hLTkFyaVJuRXFRckpaTUtDUkZ1YloyemdmbW94YnYxc1YvNXZ4emJGL0IxNFp3&traceId=1',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=471810000',
    },
    {
      id: 9,
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее. Это компактный и удобный смартфон для тех, кому нужно производительное устройство в стильном корпусе без компромиссов по качеству фото или комфорту в использовании.',
      price: 490000,
      rating: 4.3,
      image: 'https://optim.tildacdn.pro/tild3664-6231-4937-b864-636365333564/-/format/webp/image.png.webp',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/',
    },
    {
      id: 10,
      name: 'FC 26 PS5 PS5 RUS SUB',
      description: 'FC 26 для PS5 — новейший спортивный симулятор, который перенесет вас в мир футбольных баталий, где каждый матч наполнен адреналином и реалистичными моментами.',
      price: 9990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/p7a/55359573.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0f/p7b/55359574.jpg?format=gallery-medium',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDnRNCF2_P20enimpVd65S0N2bhDWfavILMQ&s',
        'https://www.lotkeys.com/uploads/blog/fc26-rev-luishenrique-careers-16x9-ylrO.jpg.webp',
      ],
      link: 'https://kaspi.kz/shop/p/fc-26-ps5-143170903/?c=471810000',
    },
  ];
}
