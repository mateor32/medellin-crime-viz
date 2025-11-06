import { StatsCard } from "@/components/StatsCard";
import { SectionHeader } from "@/components/SectionHeader";
import { DataTable } from "@/components/DataTable";
import { 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Smartphone, 
  Shield,
  Calendar,
  Target,
  DollarSign
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Análisis de Hurtos en Medellín</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl">
            Informe estadístico completo del período 2004-2024
          </p>
          <div className="mt-8 flex gap-6 flex-wrap">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="text-sm opacity-80">Período de Análisis</p>
              <p className="text-2xl font-bold">2004 - 2024</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="text-sm opacity-80">Pico Máximo</p>
              <p className="text-2xl font-bold">≈5M casos (2019)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="text-sm opacity-80">Casos Recientes</p>
              <p className="text-2xl font-bold">≈2M casos (2021)</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* I. Tendencias Temporales */}
        <section id="tendencias">
          <SectionHeader 
            title="I. Tendencias Temporales" 
            subtitle="Evolución de los hurtos a lo largo del tiempo"
            icon={TrendingUp}
          />
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <StatsCard
              title="Pico Máximo de Hurtos"
              value="≈5M"
              icon={AlertTriangle}
              description="Alcanzado en 2019"
              variant="alert"
            />
            <StatsCard
              title="Descenso Reciente"
              value="-60%"
              icon={TrendingUp}
              description="Caída de 5M a 2M casos (2019-2021)"
              variant="warning"
            />
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4 text-foreground">Fases Críticas</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-l-destructive pl-4">
                <h4 className="font-bold text-destructive">Aceleración (2015-2019)</h4>
                <p className="text-muted-foreground">
                  Crecimiento exponencial y alarmante, alcanzando un pico máximo de aproximadamente 5 millones de hurtos alrededor de 2019.
                </p>
              </div>
              <div className="border-l-4 border-l-accent pl-4">
                <h4 className="font-bold text-accent">Descenso Reciente (2020-2021)</h4>
                <p className="text-muted-foreground">
                  Los casos cayeron bruscamente a aproximadamente 2 millones, una disminución que puede estar relacionada con las restricciones de movilidad impuestas por la pandemia de COVID-19.
                </p>
              </div>
            </div>
          </div>

          <DataTable
            title="Patrones Estacionales - Casos por Mes"
            headers={["Período", "Meses", "Casos Promedio", "Observación"]}
            rows={[
              ["Picos", "Agosto, Octubre, Diciembre", ">1,800", "Asociados a actividad comercial y festiva"],
              ["Valles", "Abril, Junio, Julio", "<1,500", "Menor incidencia"],
            ]}
            highlightColumn={2}
          />
        </section>

        {/* II. Análisis Demográfico */}
        <section id="demografico" className="bg-muted/30 -mx-6 px-6 py-12 rounded-lg">
          <SectionHeader 
            title="II. Análisis Demográfico" 
            subtitle="Perfil de las víctimas"
            icon={Users}
          />
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <StatsCard
              title="Víctimas Mujeres"
              value="50.11%"
              icon={Users}
              description="10.26 mil casos"
            />
            <StatsCard
              title="Víctimas Hombres"
              value="49.67%"
              icon={Users}
              description="10.17 mil casos"
            />
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-foreground">Distribución por Edad y Modalidad</h3>
            <p className="text-muted-foreground mb-6">
              Las modalidades con mayor suma acumulada de edad de víctimas son:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-destructive/5 rounded-lg p-4 border-l-4 border-l-destructive">
                <h4 className="font-bold text-destructive mb-2">Atraco</h4>
                <p className="text-3xl font-bold mb-1">≈320k años</p>
                <p className="text-sm text-muted-foreground">Suma acumulada de edad</p>
              </div>
              <div className="bg-accent/5 rounded-lg p-4 border-l-4 border-l-accent">
                <h4 className="font-bold text-accent mb-2">Cosquilleo</h4>
                <p className="text-3xl font-bold mb-1">≈290k años</p>
                <p className="text-sm text-muted-foreground">Suma acumulada de edad</p>
              </div>
            </div>
          </div>
        </section>

        {/* III. Modalidades y Métodos */}
        <section id="modalidades">
          <SectionHeader 
            title="III. Modalidades y Métodos" 
            subtitle="Tipos de hurto y armas utilizadas"
            icon={Target}
          />
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Cosquilleo"
              value="9,392"
              icon={Target}
              description="Modalidad más común (≈46%)"
              variant="alert"
            />
            <StatsCard
              title="Atraco"
              value="7,863"
              icon={AlertTriangle}
              description="Segunda modalidad (≈38%)"
              variant="alert"
            />
            <StatsCard
              title="Descuido"
              value="1,716"
              icon={Shield}
              description="Tercera modalidad (≈8%)"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <DataTable
              title="Modalidades de Hurto"
              headers={["Modalidad", "Recuento Total"]}
              rows={[
                ["Cosquilleo", "9,392"],
                ["Atraco", "7,863"],
                ["Descuido", "1,716"],
              ]}
              highlightColumn={1}
            />

            <DataTable
              title="Métodos y Armas Utilizadas"
              headers={["Método", "Casos (millones)"]}
              rows={[
                ["Sin Arma", ">12M"],
                ["Arma de Fuego", "≈4M"],
                ["Arma Cortopunzante", "≈3M"],
              ]}
              highlightColumn={1}
            />
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-foreground">Medios de Transporte Afectados</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-4xl font-bold text-primary mb-2">1°</p>
                <p className="font-semibold">Taxi</p>
                <p className="text-sm text-muted-foreground">Mayor incidencia</p>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-4xl font-bold text-primary mb-2">2°</p>
                <p className="font-semibold">Bus</p>
                <p className="text-sm text-muted-foreground">Segunda posición</p>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-4xl font-bold text-primary mb-2">3°</p>
                <p className="font-semibold">Metro</p>
                <p className="text-sm text-muted-foreground">Tercera posición</p>
              </div>
            </div>
          </div>
        </section>

        {/* IV. Bienes Robados */}
        <section id="bienes" className="bg-muted/30 -mx-6 px-6 py-12 rounded-lg">
          <SectionHeader 
            title="IV. Bienes Robados" 
            subtitle="Objetos más frecuentemente hurtados"
            icon={Smartphone}
          />
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Celulares"
              value="≈9M"
              icon={Smartphone}
              description="Bien más robado"
              variant="alert"
            />
            <StatsCard
              title="Dinero"
              value="≈3.5M"
              icon={DollarSign}
              description="Segundo lugar"
              variant="warning"
            />
            <StatsCard
              title="Documentos"
              value="≈1.5M"
              icon={Shield}
              description="Cédulas y documentos"
            />
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-foreground">Tendencias en la Elección de Bienes</h3>
            <p className="text-muted-foreground mb-4">
              Los delincuentes muestran un enfoque abrumador en bienes de:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <p className="font-bold text-foreground">Alto Valor</p>
                <p className="text-sm text-muted-foreground mt-2">Bienes con valor de reventa alto</p>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <p className="font-bold text-foreground">Portabilidad</p>
                <p className="text-sm text-muted-foreground mt-2">Fáciles de transportar y ocultar</p>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <p className="font-bold text-foreground">Fácil Reventa</p>
                <p className="text-sm text-muted-foreground mt-2">Alta demanda en mercado negro</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusiones */}
        <section id="conclusiones" className="bg-gradient-to-r from-primary/5 to-accent/5 -mx-6 px-6 py-12 rounded-lg">
          <SectionHeader 
            title="Conclusiones Clave" 
            icon={Calendar}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-destructive flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Áreas de Mayor Riesgo
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  Transporte público (Taxi, Bus, Metro)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  Meses de Agosto, Octubre y Diciembre
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  Modalidades: Cosquilleo y Atraco
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-primary flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Recomendaciones
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Campañas de prevención focalizadas en transporte
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Mayor vigilancia en períodos festivos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Protección de dispositivos electrónicos
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm opacity-80">
            Informe Estadístico de Hurtos en Medellín • Período 2004-2024
          </p>
          <p className="text-xs opacity-60 mt-2">
            Datos basados en registros oficiales de criminalidad
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
