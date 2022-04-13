import { describe } from 'eslint/lib/rule-tester/rule-tester';
import {sports, medals, gender, team, sortTableByColumn} from '../src/data.js';
 
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = (new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)).window;
 
 
 
 
describe('sports', () => {
  it('debería ser una funcion', () => {
    expect(typeof sports).toBe('function');
  });
  it('debería remover duplicados de "sports"', () => {
 
    expect(sports()).toEqual(
    expect.arrayContaining([
        'Rowing','Taekwondo','Handball','Wrestling','Gymnastics','Swimming','Basketball','Boxing','Volleyball','Athletics','Rugby Sevens','Judo',
        'Rhythmic Gymnastics','Weightlifting','Equestrianism','Badminton', 'Water Polo', 'Football', 'Fencing', 'Shooting', 'Sailing','Beach Volleyball',
        'Canoeing','Hockey','Cycling','Tennis', 'Diving', 'Table Tennis','Triathlon', 'Archery', 'Synchronized Swimming', 'Modern Pentathlon',
        'Trampolining','Golf'])
  )})
})
 
describe('medals', () => {
  it('debería ser una funcion', () => {
    expect(typeof medals).toBe('function');
  });
  it('debería remover duplicados de "medals"', () => {
 
    expect(medals()).toEqual(
      expect.arrayContaining(['Bronzen', 'Silver', 'Gold' ])
    );
  })
})
 
describe('gender', () => {
  it('debería ser una funcion', () => {
    expect(typeof gender).toBe('function');
  });
  it('debería remover duplicados de "gender"', () => {
 
    expect(gender()).toEqual(
      expect.arrayContaining(['M', 'F' ])
    );
  })
})
 
describe('team', () => {
  it('debería ser una funcion', () => {
    expect(typeof team).toBe('function');
  });
  it('debería remover duplicados de "team"', () => {
 
    expect(team()).toEqual(
      expect.arrayContaining(
        ['Italy', 'Azerbaijan', 'France', 'Iran', 'Russia', 'Australia', 'Spain', 'Jordan', 'Netherlands', 'Great Britain',
        'United States', 'New Zealand', 'South Africa', 'Indonesia', 'Germany', 'Indonesia-1', 'Nigeria', 'Canada', 'Turkey',
        'Uzbekistan', 'Individual Olympic Athletes', 'Armenia', 'Serbia', 'Niger', 'Brazil-1', 'Jamaica', 'Norway', 'Cuba', 'Colombia',
        'Tunisia', 'South Korea', 'Denmark', 'Sweden', 'Japan', 'Brazil', 'Malaysia', 'Ethiopia', 'Switzerland', 'Kazakhstan', 'Qatar',
        'Ukraine', 'Slovakia', 'Romania', 'Croatia', 'Belgium', 'Hungary', 'Georgia', 'Netherlands-1', 'Bahamas', 'Argentina', 'China',
        'Kenya', 'North Korea', 'Poland', "Cote d'Ivoire", 'Fiji', 'Bulgaria', 'Philippines', 'Lithuania', 'Mongolia', 'Czech Republic',
        'Estonia', 'Mexico', 'Venezuela', 'Austria', 'China-1', 'Belarus', 'Israel', 'Greece', 'Thailand', 'Vietnam', 'Chinese Taipei',
        'Egypt', 'Grenada', 'Bahrain', 'South Korea-1', 'United States-2', 'Slovenia', 'Kosovo', 'Spain-2', 'Germany-1', 'Italy-1',
        'Russia-2', 'Algeria', 'India', 'Portugal', 'Ireland', 'Tajikistan', 'Burundi', 'Dominican Republic', 'Finland', 'Puerto Rico',
        'Morocco', 'United States-1', 'Czech Republic-1', 'Singapore', 'United Arab Emirates', 'Trinidad and Tobago']
      )
    );
  })
})
 
/**
 * @jest-environment jsdom
 */
 
describe('sortTableByColumn', () => {
  it('debería ser una funcion', () => {
    expect(typeof sortTableByColumn).toBe('function');
  });
  it('debería ordenar tabla por la primera columna "ascendente"', () => {
   
    document.body.innerHTML =`
    <table class="table-sortable" id="tbOlimpics">
            <thead>
              <tr class="thRio">
                <th>DISCIPLINA</th>
                <th>MEDALLA</th>
                <th>ATLETA</th>
                <th class="th-sort-asc">GÉNERO</th>
                <th>EDAD</th>
                <th>PESO</th>
                <th>ESTATURA</th>
                </tr></thead>
            <tbody><tr><td>Athletics Men's 1,500 metres</td><td>Silver</td><td>Taoufik Makhloufi
                </td><td>M</td><td>28</td><td>67</td><td>170</td></tr><tr><td>Athletics Men's 800 metres</td>
                <td>Silver</td><td>Taoufik Makhloufi</td><td>M</td><td>28</td><td>67</td><td>170</td></tr>
            </tbody>
 
       
  </table>`;
 
    const table = document.getElementById('tbOlimpics');
    const column = 0;
    const order = true;
   
    expect(sortTableByColumn(table,column,order)).toBe(void 0)
 
      });
  });
 
 
 
describe('sortTableByColumn', () => {
 
  it('debería ordenar tabla por la primera columna "descendente"', () => {
   
    document.body.innerHTML =`
    <table class="table-sortable" id="tbOlimpics">
            <thead>
              <tr class="thRio">
                <th>DISCIPLINA</th>
                <th>MEDALLA</th>
                <th>ATLETA</th>
                <th class="th-sort-asc">GÉNERO</th>
                <th>EDAD</th>
                <th>PESO</th>
                <th>ESTATURA</th>
            </tr></thead>
            <tbody> <tr><td>Athletics Men's 800 metres</td><td>Silver</td><td>Taoufik Makhloufi</td>
            <td>M</td><td>28</td><td>67</td><td>170</td></tr><tr><td>Athletics Men's 1,500 metres</td>
            <td>Silver</td><td>Taoufik Makhloufi</td><td>M</td><td>28</td><td>67</td><td>170</td></tr>
            </tbody>
  </table>`;
 
    const table = document.getElementById('tbOlimpics');
    const column = 0;
    const order = false;
   
    expect(sortTableByColumn(table,column,order)).toBe(void 0)
 
      });
  });
