import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,

  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      name: 'Nhà máy sản xuất ô tô VinFast',
      description:
        'Lắp đặt hệ thống điện công nghiệp cho dây chuyền sản xuất ô tô tự động',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Hải Phòng',
      status: 'Hoàn thành',
      statusClass: 'bg-green-100 text-green-800',
    },
    {
      id: 2,
      name: 'Khu công nghiệp Long Thành',
      description:
        'Thiết kế và thi công hệ thống điện cho 50 nhà xưởng công nghiệp',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Đồng Nai',
      status: 'Đang thực hiện',
      statusClass: 'bg-blue-100 text-blue-800',
    },
    {
      id: 3,
      name: 'Nhà máy Samsung Electronics',
      description: 'Nâng cấp hệ thống điện và lắp đặt trạm biến áp 110kV',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Thái Nguyên',
      status: 'Hoàn thành',
      statusClass: 'bg-green-100 text-green-800',
    },
    {
      id: 4,
      name: 'Nhà máy nhiệt điện Vĩnh Tân',
      description: 'Bảo trì và nâng cấp hệ thống điều khiển tự động',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Bình Thuận',
      status: 'Đang thực hiện',
      statusClass: 'bg-blue-100 text-blue-800',
    },
    {
      id: 5,
      name: 'Nhà máy thép Hòa Phát',
      description: 'Lắp đặt hệ thống điện cho dây chuyền cán thép mới',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Hưng Yên',
      status: 'Sắp bắt đầu',
      statusClass: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 6,
      name: 'Khu chế xuất Tân Thuận',
      description: 'Cải tạo và nâng cấp hệ thống điện cho 30 nhà xưởng',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'TP.HCM',
      status: 'Hoàn thành',
      statusClass: 'bg-green-100 text-green-800',
    },
    {
      id: 7,
      name: 'Nhà máy bia Heineken',
      description: 'Lắp đặt hệ thống điện cho dây chuyền đóng chai tự động',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Đà Nẵng',
      status: 'Đang thực hiện',
      statusClass: 'bg-blue-100 text-blue-800',
    },
    {
      id: 8,
      name: 'Nhà máy dệt may Việt Tiến',
      description: 'Thiết kế và thi công hệ thống điện cho xưởng may mới',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'TP.HCM',
      status: 'Sắp bắt đầu',
      statusClass: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 9,
      name: 'Khu công nghiệp VSIP',
      description: 'Xây dựng trạm biến áp và hệ thống phân phối điện',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Bắc Ninh',
      status: 'Hoàn thành',
      statusClass: 'bg-green-100 text-green-800',
    },
    {
      id: 10,
      name: 'Nhà máy sữa Vinamilk',
      description: 'Nâng cấp hệ thống điện và tự động hóa quy trình sản xuất',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Bình Dương',
      status: 'Đang thực hiện',
      statusClass: 'bg-blue-100 text-blue-800',
    },
    {
      id: 11,
      name: 'Nhà máy xi măng Holcim',
      description: 'Bảo trì và nâng cấp hệ thống điện cho dây chuyền nghiền',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Khánh Hòa',
      status: 'Hoàn thành',
      statusClass: 'bg-green-100 text-green-800',
    },
    {
      id: 12,
      name: 'Khu công nghệ cao Hòa Lạc',
      description: 'Thiết kế và thi công hệ thống điện cho tòa nhà R&D',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Hà Nội',
      status: 'Sắp bắt đầu',
      statusClass: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 13,
      name: 'Nhà máy lọc dầu Nghi Sơn',
      description: 'Bảo trì hệ thống điện và thiết bị đo lường tự động',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Thanh Hóa',
      status: 'Đang thực hiện',
      statusClass: 'bg-blue-100 text-blue-800',
    },
    {
      id: 14,
      name: 'Nhà máy thủy điện Sơn La',
      description: 'Nâng cấp hệ thống điều khiển và bảo vệ rơle',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Sơn La',
      status: 'Hoàn thành',
      statusClass: 'bg-green-100 text-green-800',
    },
    {
      id: 15,
      name: 'Khu công nghiệp Phú Mỹ',
      description: 'Xây dựng hệ thống điện cho 20 nhà xưởng mới',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Bà Rịa - Vũng Tàu',
      status: 'Sắp bắt đầu',
      statusClass: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 16,
      name: 'Nhà máy giấy Bãi Bằng',
      description:
        'Cải tạo hệ thống điện và lắp đặt thiết bị tiết kiệm năng lượng',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Phú Thọ',
      status: 'Đang thực hiện',
      statusClass: 'bg-blue-100 text-blue-800',
    },
    {
      id: 17,
      name: 'Nhà máy chế biến thủy sản Minh Phú',
      description: 'Lắp đặt hệ thống điện cho kho lạnh và dây chuyền chế biến',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Cà Mau',
      status: 'Hoàn thành',
      statusClass: 'bg-green-100 text-green-800',
    },
    {
      id: 18,
      name: 'Khu công nghiệp Nam Cầu Kiền',
      description: 'Thiết kế và thi công hệ thống chiếu sáng công nghiệp',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Hải Phòng',
      status: 'Sắp bắt đầu',
      statusClass: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 19,
      name: 'Nhà máy sản xuất linh kiện Canon',
      description: 'Nâng cấp hệ thống điện cho dây chuyền sản xuất mới',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Bắc Ninh',
      status: 'Đang thực hiện',
      statusClass: 'bg-blue-100 text-blue-800',
    },
    {
      id: 20,
      name: 'Nhà máy dược phẩm Traphaco',
      description:
        'Lắp đặt hệ thống điện cho phòng sạch và khu vực sản xuất GMP',
      image:
        'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg',
      capacity: '100MW',

      location: 'Hưng Yên',
      status: 'Hoàn thành',
      statusClass: 'bg-green-100 text-green-800',
    },
  ];
}
