  import { Injectable } from '@angular/core';
  import { ItemModel } from '../models/item.model'
  import { CarritoModel } from '../models/carrito.model';


@Injectable({
  providedIn: 'root'
})
export class InfoService {
  
  carrito:CarritoModel

  products:ItemModel[] = [
    {
      name: 'Chocolate Hersheys con almendras',
      price: 15,
      id: 'Hersheys-chocolate-with-almond-nuts',
      brand: 'Hersheys',
      type: 'candy',
      images:[
        {
          url: 'https://www.chocolatehersheys.com/content/dam/chocolatemexico/es_mx/images/hersheys-50/decada-1970.png'
        },
        {
          url: 'https://i.ya-webdesign.com/images/hershey-bar-png-1.png'
        }
      ]
    },
    {
      name: 'Chocolate Blanco Hersheys',
      price: 17,
      id: 'Hersheys-white-chocolate',
      brand: 'Hersheys',
      type: 'candy',
      images:[
        {
          url: 'https://cdn.shopify.com/s/files/1/1177/7456/products/cq5dam.web.1280.1280-3_large.png?v=1527554121'
        }
      ]
    },
    {
      name: 'Aspirina',
      price: 25,
      id: 'Aspirina',
      brand: 'Bayer',
      type: 'medicine',
      images:[
        {
          url: 'https://www.stickpng.com/assets/images/59bf7f667a216d0b052f12d3.png'
        }
      ]
    },
    {
      name: 'Bromhexina',
      price: 15,
      id: 'Bromhexina',
      brand: 'Sanofi',
      type: 'medicine',
      images:[
        {
          url: 'https://lh5.googleusercontent.com/proxy/6efutTkAQGCOgM6CduPrN6jCgkIFF2DTX3TOQlUcEulD8WOrglf3OSoH-8CJLjLg3ffbcooj1xEj1IJ01jrqVz65hxi7Otp_xJsRmpNOq3I467IKPjhoC2dztAzigv2ogqzJxBtmVE1WMnDKpuP_fWEXTQ-6O3OUUQJdCZQx_lUchF5Gwu8PL3oRsPXZUvYHmoBOtA'
        }
      ]
    },
    {
      name: 'Chips fuego',
      price: 10,
      id: 'Chips-fuego',
      brand: 'Barcel',
      type: 'snack',
      images:[
        {
          url: 'https://www.lamexicanabremen.de/1266-medium_default/chips-fuego-46g.jpg'
        },
        {
          url: 'https://www.lamexicanabremen.de/1266-large_default/chips-fuego-46g.jpg'
        }
      ]
    },
    {
      name: 'Coca cola de vidrio',
      price: 12,
      id: 'Coca-cola-vidrio',
      brand: 'Coca cola',
      type: 'soda',
      images:[
        {
          url: 'https://lh5.googleusercontent.com/proxy/dHWKNpG5eZ4l0jiGMkD4rh6j6XR_muNao7Fe3ahXV0tWXNP24ZH2rpQzCa9ig1L8Ru_syqR6j4JgWbecVIaRtVa719rUs33FwpBDVRIy14FR'
        },
        {
          url: 'https://d29nyx213so7hn.cloudfront.net/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/s/0/s0241.png'
        }
      ]
    },
    
  ]

  constructor() { }

}
