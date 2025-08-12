import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../shared/services/mock-data.service';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  services: any[] = [];
  projects: any[] = [];
  featuredProducts: any[] = [];
  testimonials: any[] = [];

  heroSection = {
    title: 'Giải Pháp Điện',
    highlight: 'Công Nghiệp Chuyên Nghiệp',
    description:
      'Cung cấp dịch vụ điện chất lượng cao cho các dự án công nghiệp với ưu tiên hàng đầu là an toàn, độ tin cậy và hiệu quả.',
    image:
      'https://www.china-briefing.com/news/wp-content/uploads/2019/04/China-Briefing-Industrial-power-rates-in-China.jpg',
    buttons: [
      {
        text: 'Dịch Vụ Của Chúng Tôi',
        link: '/services',
        isPrimary: true,
      },
      {
        text: 'Nhận Báo Giá',
        link: '/contact',
        isPrimary: false,
      },
    ],
  };

  whyChooseUs = {
    title: 'Tại Sao Chọn Chúng Tôi',
    description:
      'Với hơn 15 năm kinh nghiệm trong ngành, chúng tôi cung cấp giải pháp điện xuất sắc',
    features: [
      {
        title: 'Chuyên Gia Được Chứng Nhận',
        description:
          'Đội ngũ của chúng tôi bao gồm các kỹ sư điện được chứng nhận với kinh nghiệm ngành phong phú.',
        icon: 'certified',
      },
      {
        title: 'Đảm Bảo Chất Lượng',
        description:
          'Chúng tôi tuân thủ các tiêu chuẩn chất lượng cao nhất trong tất cả các dự án và dịch vụ.',
        icon: 'quality',
      },
      {
        title: 'An Toàn Là Ưu Tiên',
        description:
          'An toàn là ưu tiên hàng đầu trong mọi dự án chúng tôi thực hiện, bảo vệ cả người và thiết bị.',
        icon: 'safety',
      },
      {
        title: 'Giải Pháp Đổi Mới',
        description:
          'Chúng tôi áp dụng các công nghệ mới nhất để cung cấp hệ thống điện hiệu quả và tương lai.',
        icon: 'innovation',
      },
    ],
  };
  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.services = this.mockDataService.services;
    this.projects = this.mockDataService.projects;
    this.featuredProducts = this.mockDataService.getFeaturedProducts();
    this.testimonials = this.mockDataService.testimonials;
  }
}
