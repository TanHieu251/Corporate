import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  
  products = [
    {
      id: 1,
      name: 'Aptomat Schneider 3P 100A',
      description: 'Aptomat 3 pha dòng điện định mức 100A, thương hiệu Schneider',
      price: 1850000,
      image: 'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg'
    },
    {
      id: 2, 
      name: 'Tủ điện phân phối DB 400A',
      description: 'Tủ điện phân phối 400A, IP54, lắp nổi, vỏ kim loại sơn tĩnh điện',
      price: 12500000,
      image: 'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg'
    },
    {
      id: 3,
      name: 'Cáp điện Cadivi CV 16mm2',
      description: 'Cáp đồng đơn CV 16mm2, cách điện PVC, thương hiệu Cadivi',
      price: 35000,
      image: 'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg'
    },
    {
      id: 4,
      name: 'Đồng hồ đo điện đa năng',
      description: 'Đồng hồ đo điện đa năng hiển thị LCD, đo V, A, Hz, PF',
      price: 2150000,
      image: 'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg'
    },
    {
      id: 5,
      name: 'Contactor LC1D50 Schneider',
      description: 'Contactor 3P 50A 220V, thương hiệu Schneider Electric',
      price: 1250000,
      image: 'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg'
    },
    {
      id: 6,
      name: 'Biến dòng hạ thế 800/5A',
      description: 'Biến dòng đo lường tỷ số 800/5A, cấp chính xác 0.5',
      price: 450000,
      image: 'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg'
    },
    {
      id: 7,
      name: 'Tủ điều khiển động cơ MCC',
      description: 'Tủ điều khiển động cơ công suất 15kW, khởi động sao-tam giác',
      price: 15000000,
      image: 'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg'
    },
    {
      id: 8,
      name: 'Cầu dao cách ly 3P 400A',
      description: 'Cầu dao cách ly 3 pha 400A, lắp tủ, thương hiệu ABB',
      price: 3200000,
      image: 'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg'
    },
    {
      id: 9,
      name: 'Đèn báo pha LED 220V',
      description: 'Đèn báo pha LED 22mm, điện áp 220V AC, nhiều màu',
      price: 85000,
      image: 'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg'
    },
    {
      id: 10,
      name: 'Relay bảo vệ điện áp',
      description: 'Relay bảo vệ quá/thấp áp, 3 pha 4 dây, LED hiển thị',
      price: 950000,
      image: 'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg'
    },
    {
      id: 11,
      name: 'Tủ ATS 400A tự động',
      description: 'Tủ chuyển nguồn tự động ATS 400A, controller thông minh',
      price: 45000000,
      image: 'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg'
    },
    {
      id: 12,
      name: 'Cáp ngầm CXV 3x240mm2',
      description: 'Cáp ngầm 3 lõi đồng, cách điện XLPE 240mm2',
      price: 850000,
      image: 'https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_IndustrialElectricalWork_The-Growing-Demand-for-Industrial-Electricians.jpg'
    }
  ];

  currentPage = 1;
  itemsPerPage = 6;

  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  

  
}
