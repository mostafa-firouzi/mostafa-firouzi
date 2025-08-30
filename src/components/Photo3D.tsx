import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshWobbleMaterial } from '@react-three/drei'
import { Suspense } from 'react'

const Photo3D = () => {
  return (
    <div className="w-64 h-64 mx-auto">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
            <MeshWobbleMaterial
              color="hsl(var(--primary))"
              attach="material"
              factor={0.6}
              speed={0.5}
            />
          </Sphere>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Photo3D