import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

// A single animated 3D shape. Swap this out for a loaded .glb model later
// using <useGLTF> from @react-three/drei if you want a custom asset.
function SpinningKnot() {
  const meshRef = useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.3
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 200, 32]} />
        <meshStandardMaterial
          color="#c9a961"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <SpinningKnot />
      {/* Free HDRI environment lighting/reflections, no assets to host yourself */}
      <Environment preset="city" />
      {/* Lets visitors drag to orbit the camera around the object */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}
