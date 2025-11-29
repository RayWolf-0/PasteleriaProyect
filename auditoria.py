import os
import sys

def auditar_k8s(carpeta):
    print(f" INICIANDO AUDITORÍA DE CUMPLIMIENTO EN: {carpeta}")
    print("-" * 50)
    
    archivos_encontrados = 0
    errores = 0

    # Verifica si la carpeta existe
    if not os.path.exists(carpeta):
        print(f"Error: La carpeta '{carpeta}' no existe.")
        return

    for archivo in os.listdir(carpeta):
        if archivo.endswith(".yaml") or archivo.endswith(".yml"):
            archivos_encontrados += 1
            ruta_completa = os.path.join(carpeta, archivo)
            
            with open(ruta_completa, 'r') as f:
                contenido = f.read()
                
                # REGLA 1: No usar 'latest' en imágenes 
                if "image:" in contenido and ":latest" in contenido:
                    print(f" [FALLO] {archivo}: Usa tag ':latest'. Se requiere versión específica (ej: :1.0).")
                    errores += 1
                
                # REGLA 2: Verificar que tenga límites de recursos
                elif "resources:" not in contenido:
                    print(f"[ADVERTENCIA] {archivo}: No define límites de CPU/Memoria.")
                
                else:
                    print(f"[OK] {archivo} cumple las políticas.")

    print("-" * 50)
    print(f"RESUMEN: {archivos_encontrados} archivos analizados. {errores} fallos críticos.")
    
    if errores == 0:
        print("RESULTADO: CUMPLIMIENTO APROBADO")
    else:
        print("RESULTADO: CUMPLIMIENTO RECHAZADO")

if __name__ == "__main__":
    # Audita la carpeta 'k8s'
    auditar_k8s("./k8s")