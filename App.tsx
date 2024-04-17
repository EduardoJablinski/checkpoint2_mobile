import React from "react";
import { NativeBaseProvider, View } from 'native-base';
import AdicionarTarefa from "./src/components/AdicionarTarefa";
import { ProvedorEstadoGlobal } from "./src/hooks/EstadoGlobal";
import ListaTarefas from "./src/components/ListaTarefas";

export default function App() {
  return (
    <NativeBaseProvider>
      <ProvedorEstadoGlobal>
        <View style={{ flex: 1 }}>
          {/* Renderização do componente AdicionarTarefa */}
          <AdicionarTarefa />
          {/* Renderização do componente ListaTarefas */}
          <ListaTarefas />
        </View>
      </ProvedorEstadoGlobal>
    </NativeBaseProvider>
  );
}
