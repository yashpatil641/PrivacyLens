
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"


interface ComponentProps {
  site?: string;
  // score_type: string;
  score?: number; // Optional with default value
  // summary: string;
}


const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Component({site, score=70  }: ComponentProps) {
  const chartData = [
    { browser: "safari", visitors: score, fill: "var(--color-safari)" },
  ]
  return (
    <div className="relative group cursor-pointer  ">
    
    <div
        className="relative px-7 py-6 bg-zinc-900 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
        <div className="space-y-2">
            
        
    <Card className="flex gap-5 p-7 h-full bg-zinc-500/10  shadow-none  transition-all duration-300 items-center dark border-none">

      <CardHeader className="items-center p-0 ">
        <CardTitle className="text-[20px]">Risk Precentage</CardTitle>
        <CardDescription className="text-[15px]">for {site}</CardDescription>
      </CardHeader>
      <CardContent className="bg-green-500/500 p-0">
        <ChartContainer 
          config={chartConfig}
          className="mx-auto aspect-square h-[120px] p-0"
        >
          <RadialBarChart 
            data={chartData}
            startAngle={0}
            endAngle={3.6*chartData[0].visitors}
            innerRadius={50}
            outerRadius={80}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-zinc-900"
              polarRadius={[56, 44]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} fill="#ff7eb3" />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartData[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="p-2 flex-col gap-2 mt-auto text-sm w-44  justify-end">
        <div className="flex items-center  flex-wrap  font-medium leading-none ">
        Summary:  
        </div>
        <div className="leading-none text-muted-foreground text-center">
        {summary}
        </div>
      </CardFooter> */}
    </Card>
    </div>
    </div>
</div>
  )
}