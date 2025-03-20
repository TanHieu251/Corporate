import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  services = [
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>`,
      title: 'Save Your Money',
      description:
        'Save money on utilities or increase the value of your home by installing solar panels as a great option.',
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7m-9 9v-6h6v6m-9-6h18"></path>`,
      title: 'Home Is Energy',
      description:
        'Every day the sun provides us with an abundance of free energy by placing solar panels on your roof.',
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
      title: 'Consult & Planning',
      description:
        'Our remote industrial solar systems are designed to reliably power our clients critical remote locations.',
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>`,
      title: 'Certified Engineers',
      description:
        'Our staff have experience on our certified engineers and can design any complete solar system.',
    },
  ];

  products = [
    {
      id: 1,
      name: 'Solar Panel 400W',
      description:
        'High-efficiency monocrystalline solar panel for residential use',
      price: 299.99,
      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      isNew: true,
    },
    {
      id: 2,
      name: 'Solar Inverter 5kW',
      description: 'Pure sine wave inverter with MPPT charging',
      price: 899.99,
      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      isNew: false,
    },
    {
      id: 3,
      name: 'Solar Battery 48V',
      description: 'Lithium battery pack for solar energy storage',
      price: 2499.99,
      image:
        'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
      isNew: true,
    },
    {
      id: 3,
      name: 'Solar Battery 48V',
      description: 'Lithium battery pack for solar energy storage',
      price: 2499.99,
      image:
        'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
      isNew: true,
    },
    {
      id: 3,
      name: 'Solar Battery 48V',
      description: 'Lithium battery pack for solar energy storage',
      price: 2499.99,
      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      isNew: true,
    },
    {
      id: 3,
      name: 'Solar Battery 48V',
      description: 'Lithium battery pack for solar energy storage',
      price: 2499.99,
      image:
        'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
      isNew: true,
    },
    {
      id: 3,
      name: 'Solar Battery 48V',
      description: 'Lithium battery pack for solar energy storage',
      price: 2499.99,
      image:
        'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
      isNew: true,
    },
    {
      id: 3,
      name: 'Solar Battery 48V',
      description: 'Lithium battery pack for solar energy storage',
      price: 2499.99,
      image:
        'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
      isNew: true,
    },
    {
      id: 3,
      name: 'Solar Battery 48V',
      description: 'Lithium battery pack for solar energy storage',
      price: 2499.99,
      image:
        'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
      isNew: true,
    },
    {
      id: 3,
      name: 'Solar Battery 48V',
      description: 'Lithium battery pack for solar energy storage',
      price: 2499.99,
      image:
        'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
      isNew: true,
    },
  ];

  projects = [
    {
      id: 1,
      title: 'Nhà Máy Điện Mặt Trời Ninh Thuận',
      description: 'Dự án điện mặt trời quy mô lớn tại tỉnh Ninh Thuận',
      capacity: '50MW',
      location: 'Ninh Thuận',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
    },
    {
      id: 2,
      title: 'Trang Trại Điện Gió Bạc Liêu',
      description: 'Hệ thống tuabin gió ven biển tại Bạc Liêu',
      capacity: '100MW',
      location: 'Bạc Liêu',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9',
    },
    {
      id: 3,
      title: 'Nhà Máy Năng Lượng Tái Tạo Bình Thuận',
      description: 'Dự án kết hợp điện mặt trời và điện gió',
      capacity: '75MW',
      location: 'Bình Thuận',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
    },
    {
      id: 4,
      title: 'Khu Công Nghiệp Long Thành',
      description: 'Hệ thống điện mặt trời áp mái cho khu công nghiệp',
      capacity: '25MW',
      location: 'Đồng Nai',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7',
    },
    {
      id: 5,
      title: 'Nhà Máy Điện Mặt Trời Đắk Lắk',
      description: 'Dự án điện mặt trời kết hợp nông nghiệp',
      capacity: '40MW',
      location: 'Đắk Lắk',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
    },
    {
      id: 6,
      title: 'Trang Trại Điện Gió Sóc Trăng',
      description: 'Dự án điện gió ngoài khơi tại Sóc Trăng',
      capacity: '80MW',
      location: 'Sóc Trăng',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9',
    },
  ];

  currentIndex = 0;
  itemsPerPage = 4;

  next() {
    const maxIndex = this.products.length - this.itemsPerPage;
    if (this.currentIndex < maxIndex) {
      this.currentIndex += this.itemsPerPage;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.itemsPerPage;
    }
  }

  get visibleProducts() {
    return this.products.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerPage
    );
  }
}
