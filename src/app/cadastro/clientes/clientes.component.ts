import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FilterService, SelectItemGroup } from 'primeng/api';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormsModule } from '@angular/forms';

interface CityGroup {
  label: string;
  value: string;
  items: City[];
}

interface City {
  label: string;
  value: string;
}

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [FormsModule, InputTextModule, InputNumberModule, AutoCompleteModule, NavbarComponent],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  value: string | undefined;
  input_number: number = 42723;
  selectedCity: City | undefined;
  filteredGroups: CityGroup[] = [];
  groupedCities: CityGroup[] = [];

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.groupedCities = [
      {
        label: 'Germany', value: 'de',
        items: [
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Frankfurt', value: 'Frankfurt' },
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' }
        ]
      },
      {
        label: 'USA', value: 'us',
        items: [
          { label: 'Chicago', value: 'Chicago' },
          { label: 'Los Angeles', value: 'Los Angeles' },
          { label: 'New York', value: 'New York' },
          { label: 'San Francisco', value: 'San Francisco' }
        ]
      },
      {
        label: 'Japan', value: 'jp',
        items: [
          { label: 'Kyoto', value: 'Kyoto' },
          { label: 'Osaka', value: 'Osaka' },
          { label: 'Tokyo', value: 'Tokyo' },
          { label: 'Yokohama', value: 'Yokohama' }
        ]
      }
    ];
  }

  filterGroupedCity(event: { originalEvent: Event; query: string }) {
    const query = event.query;
    const filteredGroups: CityGroup[] = [];  // Tipado como CityGroup[]

    if (this.groupedCities) {
      for (let optgroup of this.groupedCities) {
        const filteredSubOptions = this.filterService.filter(optgroup.items, ['label'], query, 'contains') as City[];
        if (filteredSubOptions && filteredSubOptions.length) {
          filteredGroups.push({
            label: optgroup.label,
            value: optgroup.value,
            items: filteredSubOptions
          });
        }
      }
    }

    this.filteredGroups = filteredGroups;
  }
}
