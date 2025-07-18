import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../p-lib/until/until';
import { CompanyServiceService } from '../../shared/services/company-service.service';

@Component({
  selector: 'app-services',
  standalone: false,

  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit, OnDestroy {
  serviceData: any[] = [];
  Unsubscribe = new Subject<void>();

  //#region LIFECYCLE

  constructor(private serviceAPI: CompanyServiceService) {}

  ngOnInit(): void {
    this.APIGetService();
  }

  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }

  //#endregion

  // Additional services data
  additionalServices = [
    {
      id: 'energy-efficiency',
      title: 'Giải pháp tiết kiệm năng lượng',
      description:
        'Tối ưu hóa mức tiêu thụ năng lượng của bạn với các giải pháp tiết kiệm năng lượng của chúng tôi, bao gồm nâng cấp đèn LED, hiệu chỉnh hệ số công suất và hệ thống quản lý năng lượng.',
      icon: 'lightbulb',
    },
    {
      id: 'power-quality',
      title: 'Phân tích chất lượng điện',
      description:
        'Xác định và giải quyết các vấn đề về chất lượng điện có thể ảnh hưởng đến hiệu suất và tuổi thọ thiết bị với dịch vụ phân tích chất lượng điện toàn diện của chúng tôi.',
      icon: 'bar-chart',
    },
    {
      id: 'retrofitting',
      title: 'Cải tạo hệ thống điện',
      description:
        'Nâng cấp hệ thống điện hiện có của bạn để cải thiện hiệu suất, an toàn và tuân thủ các tiêu chuẩn hiện hành thông qua dịch vụ cải tạo của chúng tôi.',
      icon: 'wrench',
    },
  ];

  // Service process steps
  processSteps = [
    {
      step: 1,
      title: 'Tư vấn',
      description:
        'Chúng tôi bắt đầu với một buổi tư vấn kỹ lưỡng để hiểu rõ nhu cầu, thách thức và mục tiêu cụ thể của bạn.',
    },
    {
      step: 2,
      title: 'Đánh giá & Thiết kế',
      description:
        'Các kỹ sư của chúng tôi thực hiện đánh giá chi tiết và phát triển giải pháp thiết kế tùy chỉnh để bạn phê duyệt.',
    },
    {
      step: 3,
      title: 'Triển khai',
      description:
        'Các kỹ thuật viên lành nghề của chúng tôi thực hiện dự án theo thiết kế đã được phê duyệt, tuân thủ các tiêu chuẩn chất lượng và an toàn nghiêm ngặt.',
    },
    {
      step: 4,
      title: 'Kiểm tra & Hỗ trợ',
      description:
        'Chúng tôi kiểm tra kỹ lưỡng tất cả các công trình lắp đặt và cung cấp hỗ trợ liên tục để đảm bảo hiệu suất tối ưu của hệ thống điện của bạn.',
    },
  ];

  //#region API
  APIGetService() {
    return this.serviceAPI
      .GetService()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res: any) => {
          if (Until_check.hasListValue(res.data)) {
            console.log(res);

            this.serviceData = res.data;
          } else {
            // this.nofiService.error(
            //   `Đã xảy ra lỗi khi lấy danh sách chính sách: ${res.ErrorString}`
            // );
          }
        },
        (error: unknown) => {
          // this.nofiService.error(
          //   `Đã xảy ra lỗi khi lấy danh sách chính sách: ${error}`
          // );
        }
      );
  }
}
