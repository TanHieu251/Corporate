import { Component, OnDestroy, OnInit } from '@angular/core';
import { MockDataService } from '../../shared/services/mock-data.service';
import { CompanyServiceService } from '../../shared/services/company-service.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../p-lib/until/until';

@Component({
  selector: 'app-company',
  standalone: false,

  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent implements OnInit, OnDestroy {
  highlights = [
    { text: 'Chuyên Gia Được Chứng Nhận', icon: 'certified' },
    { text: 'Dịch Vụ Chất Lượng', icon: 'quality' },
    { text: 'Giải Pháp Đổi Mới', icon: 'innovation' },
    { text: 'Hài Lòng Khách Hàng', icon: 'satisfaction' },
  ];

  team = {
    title: 'Đội Ngũ Lãnh Đạo',
    description:
      'Gặp gỡ các chuyên gia giàu kinh nghiệm dẫn dắt công ty chúng tôi',
    members: [
      {
        name: 'Nguyễn Văn Minh',
        position: 'Bùi Tấn Hiếu',
        image: 'https://picsum.photos/seed/team1/400/400',
        bio: 'Hơn 20 năm kinh nghiệm trong hệ thống điện công nghiệp.',
      },
      {
        name: 'Trần Thị Lan',
        position: 'Giám Đốc Kỹ Thuật',
        image: 'https://picsum.photos/seed/team2/400/400',
        bio: 'Kỹ sư điện được chứng nhận với chuyên môn về tự động hóa.',
      },
    ],
    summary:
      'Đội ngũ của chúng tôi bao gồm hơn 50 chuyên gia có tay nghề, bao gồm kỹ sư điện được chứng nhận, kỹ thuật viên, quản lý dự án và nhân viên hỗ trợ, tất cả đều tận tâm cung cấp dịch vụ xuất sắc.',
  };

  certifications = {
    title: 'Chứng Nhận',
    description:
      'Chúng tôi duy trì các tiêu chuẩn chất lượng và an toàn cao nhất thông qua các chứng nhận ngành',
    items: [
      {
        name: 'ISO 9001:2015',
        description: 'Chứng Nhận Hệ Thống Quản Lý Chất Lượng',
        image: 'https://picsum.photos/seed/cert1/200/200',
      },
      {
        name: 'ISO 14001:2015',
        description: 'Chứng Nhận Hệ Thống Quản Lý Môi Trường',
        image: 'https://picsum.photos/seed/cert2/200/200',
      },
      {
        name: 'OHSAS 18001:2007',
        description: 'Hệ Thống Quản Lý An Toàn và Sức Khỏe Nghề Nghiệp',
        image: 'https://picsum.photos/seed/cert3/200/200',
      },
    ],
  };

  // cta = {
  //   title: 'Hợp Tác Với ElectroPro Cho Dự Án Tiếp Theo Của Bạn',
  //   description:
  //     'Trải nghiệm sự khác biệt khi làm việc với đội ngũ tận tâm về sự xuất sắc, đổi mới và sự hài lòng của khách hàng.',
  //   buttons: [
  //     { text: 'Liên Hệ', link: '/contact', isPrimary: true },
  //     { text: 'Dịch Vụ Của Chúng Tôi', link: '/services', isPrimary: false },
  //   ],
  // };
  companyData: any = {};
  icons: any = {};
  Unsubscribe = new Subject<void>();

  constructor(private companyService: CompanyServiceService) {}

  ngOnInit(): void {
    this.APIGetCompany();
  }

  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }

  //#region API
  APIGetCompany() {
    return this.companyService
      .GetCompany()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.companyData = res.data;
          } else {
            // this.nofiService.error(
            //   `Đã xảy ra lỗi khi lấy danh sách chính sách: ${res.ErrorString}`
            // );
          }
        },
        (error) => {
          // this.nofiService.error(
          //   `Đã xảy ra lỗi khi lấy danh sách chính sách: ${error}`
          // );
        }
      );
  }
}
