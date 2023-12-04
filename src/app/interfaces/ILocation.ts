export interface ILocation {
    id: number;
    posicaoAtual: {
      latitude: string;
      longitude: string;
    };
    dataF: string;
    hora: string;
    sensorId: number;
  }