Copilot

Type / to search
Copilot navigation
Copilot Chat
New conversation
You said: import React, { useState, useEffect } from
import React, { useState, useEffect } from 'react';
import { RefreshCw, Terminal, ShieldCheck, Cpu, Download, Github, Code, Zap, Layers, Server, BarChart, MessageCircle } from 'lucide-react';

// 메인 컴포넌트
const QuantumGPUPlatform = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [downloadProgress, setDownloadProgress] = useState(null);
  const [showSystemRequirements, setShowSystemRequirements] = useState(false);

  // 다운로드 함수
  const handleDownload = (version, type = 'python') => {
    // 진행률 표시
    setDownloadProgress(0);
    
    // 다운로드 진행률 시뮬레이션
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
    
    // 진행률 시뮬레이션 후 다운로드 완료
    setTimeout(() => {
      if (type === 'full') {
        downloadFullPackage(version);
      } else if (type === 'exe') {
        downloadExecutable(version);
      } else {
        downloadPythonFile(version);
      }
      
      setTimeout(() => {
        setDownloadProgress(null);
      }, 800);
    }, 1200);
  };
  
  // Python 파일 다운로드
  const downloadPythonFile = (version) => {
    // 파일 내용
    const pythonCode = `# 퀀텀-GPU 플랫폼 ${version} 다운로드 파일
# Copyright (c) 2025 퀀텀-GPU 플랫폼
# ================================================

import numpy as np

# 이 파일은 양자 GPU 플랫폼의 샘플 코드입니다
print("퀀텀-GPU 플랫폼 ${version} 예제 코드 실행 중...")

# 양자 회로 예제 코드
class QuantumCircuit:
    def __init__(self, num_qubits):
        self.num_qubits = num_qubits
        self.gates = []
        print(f"{num_qubits}-큐비트 양자 회로를 생성했습니다")
    
    def h(self, qubit):
        self.gates.append(f"h {qubit}")
        print(f"큐비트 {qubit}에 Hadamard 게이트 적용")
    
    def cx(self, control, target):
        self.gates.append(f"cx {control} {target}")
        print(f"큐비트 {control}에서 {target}으로 CNOT 게이트 적용")
    
    def measure_all(self):
        self.gates.append("measure_all")
        print("모든 큐비트 측정")
    
    def __str__(self):
        return f"{self.num_qubits}-큐비트 회로, {len(self.gates)}개 게이트"

class GPUBackend:
    def __init__(self, device="cuda"):
        self.device = device
        print(f"{device} GPU 백엔드 초기화됨")
    
    def run(self, circuit, shots=1000):
        print(f"{circuit}를 {shots}샷으로 실행 중...")
        # 가상의 결과 생성
        results = {"0" * circuit.num_qubits: shots // 2}
        for i in range(min(5, 2**circuit.num_qubits)):
            results[bin(i)[2:].zfill(circuit.num_qubits)] = np.random.randint(0, shots // 10)
        return {"counts": results}

# 예제 실행
circuit = QuantumCircuit(5)
circuit.h(0)
circuit.cx(0, 1)
circuit.measure_all()

backend = GPUBackend()
result = backend.run(circuit, shots=1000)

print("\\n결과:")
for state, count in result["counts"].items():
    print(f"|{state}〉: {count} 샷")

print("\\n양자-GPU 플랫폼 설치하려면:")
print("$ pip install quantum-gpu")
print("\\n자세한 정보: https://quantum-gpu.io/docs")`;

    // 데이터 URI로 직접 다운로드
    const dataUri = `data:text/plain;charset=utf-8,${encodeURIComponent(pythonCode)}`;
    const fileName = `quantum-gpu-${version}.py`;
    
    // 다운로드 링크 생성
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', dataUri);
    downloadLink.setAttribute('download', fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  
  // 전체 패키지 다운로드
  const downloadFullPackage = (version) => {
    const packageInfo = `퀀텀-GPU 플랫폼 ${version} 전체 패키지

이 파일은 다음 구성 요소를 포함합니다:
- quantum_gpu/ - 메인 라이브러리 
  - core/ - 코어 모듈
  - circuits/ - 양자 회로 구현
  - backends/ - GPU 백엔드 구현
  - optimization/ - 최적화 알고리즘
  - ml/ - 양자 머신러닝 모듈
  - visualization/ - 결과 시각화 도구
- bin/ - 실행 파일
  - quantum-gpu.exe - Windows 실행 파일
  - quantum-gpu - Linux/Mac 실행 파일
- examples/ - 예제 코드
  - basic_circuit.py - 기본 회로 예제
  - vqe_example.py - 변분 양자 고유값 예제
  - qaoa_maxcut.py - QAOA 최대 컷 문제 예제
  - qml_classifier.py - 양자 머신러닝 분류기 예제
- docs/ - 문서
  - installation.md - 설치 가이드
  - api_reference.md - API 참조 문서
  - tutorials/ - 튜토리얼
- LICENSE - 라이선스 정보
- README.md - 프로젝트 소개
- setup.py - 설치 스크립트

## 설치 방법

### Windows
1. 다운로드한 ZIP 파일을 압축 해제합니다.
2. setup.exe를 실행하여 설치 마법사를 따릅니다.
3. 시작 메뉴에서 "퀀텀-GPU 플랫폼"을 찾아 실행합니다.

### Linux/Mac
1. 다운로드한 ZIP 파일을 압축 해제합니다.
2. 터미널을 열고 압축 해제된 디렉토리로 이동합니다.
3. 다음 명령을 실행합니다:
   $ ./install.sh

## Python 패키지로 설치
터미널 또는 명령 프롬프트에서 다음 명령을 실행합니다:
$ pip install quantum-gpu

## 시작하기
설치 후, 다음 명령을 실행하여 기본 예제를 시작할 수 있습니다:
$ quantum-gpu --example basic

자세한 정보: https://quantum-gpu.io/docs
`;

    // 데이터 URI로 직접 다운로드
    const dataUri = `data:text/plain;charset=utf-8,${encodeURIComponent(packageInfo)}`;
    const fileName = `quantum-gpu-${version}-package-info.txt`;
    
    // 다운로드 링크 생성
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', dataUri);
    downloadLink.setAttribute('download', fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  
  // 실행 파일 다운로드 (실제로는 텍스트 정보만 제공)
  const downloadExecutable = (version) => {
    const exeInfo = `퀀텀-GPU 플랫폼 ${version} 실행 파일 안내

브라우저에서는 보안상의 이유로 직접 실행 파일(.exe)을 다운로드할 수 없습니다.
아래의 방법 중 하나를 사용하여 양자-GPU 플랫폼을 설치하세요:

## 공식 웹사이트에서 다운로드
1. https://quantum-gpu.io/download 페이지를 방문하세요.
2. 운영체제에 맞는 설치 파일을 다운로드하세요:
   - Windows: quantum-gpu-${version}-setup.exe
   - macOS: quantum-gpu-${version}.dmg
   - Linux: quantum-gpu-${version}.deb 또는 .rpm

## Python 패키지로 설치
터미널 또는 명령 프롬프트에서 다음 명령을 실행하세요:
$ pip install quantum-gpu

## 실행 방법
설치 후 다음과 같이 실행할 수 있습니다:

### GUI 애플리케이션
- Windows: 시작 메뉴에서 "퀀텀-GPU 플랫폼"을 찾아 클릭하세요.
- macOS: 응용 프로그램 폴더에서 "퀀텀-GPU 플랫폼"을 찾아 클릭하세요.
- Linux: 애플리케이션 메뉴에서 "퀀텀-GPU 플랫폼"을 찾거나 터미널에서 'quantum-gpu-gui'를 실행하세요.

### 명령줄 도구
터미널 또는 명령 프롬프트에서 다음 명령을 사용하세요:
$ quantum-gpu [명령어] [옵션]

예시:
$ quantum-gpu simulate --qubits 5 --circuit bell_state
$ quantum-gpu optimize --problem maxcut --method qaoa

자세한 정보: https://quantum-gpu.io/docs/installation
`;

    // 데이터 URI로 직접 다운로드
    const dataUri = `data:text/plain;charset=utf-8,${encodeURIComponent(exeInfo)}`;
    const fileName = `quantum-gpu-${version}-install-guide.txt`;
    
    // 다운로드 링크 생성
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', dataUri);
    downloadLink.setAttribute('download', fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // 네비게이션 항목
  const navItems = [
    { id: 'dashboard', title: '대시보드', icon: RefreshCw },
    { id: 'download', title: '다운로드', icon: Download },
    { id: 'features', title: '기능', icon: Layers },
    { id: 'docs', title: '문서', icon: Code },
    { id: 'benchmark', title: '벤치마크', icon: BarChart }
  ];

  // 헤더 컴포넌트
  const Header = () => (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-purple-600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="3" fill="currentColor"/>
          </svg>
          <h1 className="ml-2 text-xl font-bold text-gray-900">퀀텀-GPU 플랫폼</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          {navItems.map(item => (
            <button 
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                window.scrollTo(0, 0);
              }}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === item.id ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-4 h-4 inline-block mr-1" />
              {item.title}
            </button>
          ))}
        </nav>
        <div className="flex items-center">
          <button 
            onClick={() => handleDownload('latest', 'exe')}
            className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center"
          >
            <Download className="w-4 h-4 mr-1" />
            실행 파일 다운로드
          </button>
        </div>
      </div>
    </header>
  );

  // 대시보드 컴포넌트
  const Dashboard = () => (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">양자 컴퓨팅 GPU 가속 플랫폼</h2>
      
      <div className="mb-10">
        <p className="text-lg mb-4">
          양자 컴퓨팅과 GPU 가속을 결합한 고성능 시뮬레이션 및 계산 플랫폼입니다.
          복잡한 양자 알고리즘을 병렬 처리하고 대규모 양자 회로를 시뮬레이션하여 
          양자 소프트웨어 개발 속도를 최대 100배 향상시킵니다.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <button 
            onClick={() => handleDownload('latest', 'exe')}
            className="bg-purple-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-purple-700 flex items-center justify-center"
          >
            <Download className="w-5 h-5 mr-2" />
            실행 파일 다운로드
          </button>
          <button 
            onClick={() => handleDownload('latest', 'full')}
            className="bg-green-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-green-700 flex items-center justify-center"
          >
            <Download className="w-5 h-5 mr-2" />
            전체 패키지 다운로드
          </button>
          <button 
            onClick={() => {
              setActiveTab('docs');
              window.scrollTo(0, 0);
            }}
            className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-base font-medium hover:bg-gray-50 flex items-center justify-center"
          >
            <Code className="w-5 h-5 mr-2" />
            문서 살펴보기
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <DashboardCard 
          title="GPU 가속" 
          value="최대 100x" 
          trend="빠른 연산"
          icon={<Zap className="w-8 h-8 text-purple-500" />}
        />
        <DashboardCard 
          title="지원 큐비트" 
          value="40+" 
          trend="대규모 시뮬레이션"
          icon={<Cpu className="w-8 h-8 text-green-500" />}
        />
        <DashboardCard 
          title="양자 알고리즘" 
          value="25+" 
          trend="즉시 사용 가능"
          icon={<Terminal className="w-8 h-8 text-blue-500" />}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Server className="w-5 h-5 mr-2 text-purple-600" />
            주요 기능
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
              <span>CUDA 및 OpenCL 기반 GPU 가속 양자 회로 시뮬레이션</span>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
              <span>하이브리드 양자-고전 알고리즘 최적화</span>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
              <span>변분 양자 회로(VQC) 학습 가속</span>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
              <span>Qiskit, Cirq, PyQuil 등 주요 양자 프레임워크 지원</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <BarChart className="w-5 h-5 mr-2 text-purple-600" />
            성능 벤치마크
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Shor의 알고리즘 (16-큐비트)</span>
                <span className="text-sm font-medium text-purple-600">89배 빠름</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '89%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">QAOA 최적화 (20-큐비트)</span>
                <span className="text-sm font-medium text-purple-600">64배 빠름</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '64%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">양자 머신러닝 (QNN, 10-큐비트)</span>
                <span className="text-sm font-medium text-purple-600">52배 빠름</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '52%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 대시보드 카드 컴포넌트
  const DashboardCard = ({ title, value, trend, icon }) => (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <p className="text-2xl font-bold mt-1">{value}</p>
          <span className="text-sm text-purple-600">{trend}</span>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          {icon}
        </div>
      </div>
    </div>
  );
  
  // 다운로드 섹션 컴포넌트
  const DownloadSection = () => (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">양자-GPU 플랫폼 다운로드</h2>
      
      {downloadProgress !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">다운로드 중...</h3>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div 
                className="bg-purple-600 h-4 rounded-full transition-all duration-150 ease-out" 
                style={{ width: `${downloadProgress}%` }}
              ></div>
            </div>
            <p className="text-right text-sm text-gray-600">{downloadProgress}%</p>
            {downloadProgress === 100 && (
              <p className="text-green-600 mt-2">다운로드 완료!</p>
            )}
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">안정 버전</h3>
          <p className="text-sm text-gray-600 mb-4">v2.4.1 (2025년 4월 업데이트)</p>
          <ul className="text-sm space-y-2 mb-4">
            <li>• NVIDIA RTX 30/40 시리즈 최적화</li>
            <li>• AMD RDNA 3 지원 개선</li>
            <li>• 주요 버그 수정</li>
          </ul>
          <div className="flex flex-col space-y-2">
            <button 
              onClick={() => handleDownload('2.4.1', 'python')}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Python 코드 다운로드
            </button>
            <button 
              onClick={() => handleDownload('2.4.1', 'full')}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              전체 패키지 다운로드
            </button>
            <button 
              onClick={() => handleDownload('2.4.1', 'exe')}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              실행 파일 다운로드
            </button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border-2 border-purple-400">
          <div className="absolute -mt-10 ml-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            추천
          </div>
          <h3 className="text-lg font-semibold mb-2">최신 버전</h3>
          <p className="text-sm text-gray-600 mb-4">v3.0.0 (2025년 5월 출시)</p>
          <ul className="text-sm space-y-2 mb-4">
            <li>• 새로운 텐서 네트워크 엔진</li>
            <li>• 40+ 큐비트 시뮬레이션 지원</li>
            <li>• 분산 컴퓨팅 프레임워크</li>
            <li>• Python 3.12 지원</li>
          </ul>
          <div className="flex flex-col space-y-2">
            <button 
              onClick={() => handleDownload('3.0.0', 'python')}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Python 코드 다운로드
            </button>
            <button 
              onClick={() => handleDownload('3.0.0', 'full')}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              전체 패키지 다운로드
            </button>
            <button 
              onClick={() => handleDownload('3.0.0', 'exe')}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              실행 파일 다운로드
            </button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">개발자 버전</h3>
          <p className="text-sm text-gray-600 mb-4">v3.1.0-beta (2025년 5월 개발중)</p>
          <ul className="text-sm space-y-2 mb-4">
            <li>• 새로운 VQE 알고리즘</li>
            <li>• 확장된 API 기능</li>
            <li>• 실험적 기능 포함</li>
            <li>• 테스트 용도로만 사용</li>
          </ul>
          <div className="flex flex-col space-y-2">
            <button 
              onClick={() => handleDownload('3.1.0-beta', 'python')}
              className="w-full bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Python 코드 다운로드
            </button>
            <button 
              onClick={() => handleDownload('3.1.0-beta', 'full')}
              className="w-full bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              전체 패키지 다운로드
            </button>
            <button 
              onClick={() => handleDownload('3.1.0-beta', 'exe')}
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              실행 파일 다운로드
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">시스템 요구사항</h3>
          <button 
            onClick={() => setShowSystemRequirements(!showSystemRequirements)}
            className="text-purple-600 hover:text-purple-800"
          >
            {showSystemRequirements ? '접기' : '펼치기'}
          </button>
        </div>
        
        {showSystemRequirements && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">최소 사양</h4>
              <ul className="text-sm space-y-2">
                <li>• CPU: Intel i5/AMD Ryzen 5 이상</li>
                <li>• RAM: 8GB 이상</li>
                <li>• GPU: NVIDIA GTX 1660 / AMD RX 5600 이상</li>
                <li>• 저장공간: 5GB</li>
                <li>• OS: Windows 10/11, Ubuntu 20.04+, macOS 12+</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">권장 사양</h4>
              <ul className="text-sm space-y-2">
                <li>• CPU: Intel i7/AMD Ryzen 7 이상</li>
                <li>• RAM: 16GB 이상</li>
                <li>• GPU: NVIDIA RTX 3070+ / AMD RX 6800+</li>
                <li>• 저장공간: 10GB SSD</li>
                <li>• CUDA 11.7 또는 OpenCL 3.0 이상</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">소스 코드 및 개발자 리소스</h3>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <a 
            href="#github-repo" 
            className="bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 flex items-center justify-center"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub 리포지토리
          </a>
          <a 
            href="#api-docs" 
            className="bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 flex items-center justify-center"
          >
            <Code className="w-4 h-4 mr-2" />
            API 문서
          </a>
          <a 
            href="#examples" 
            className="bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 flex items-center justify-center"
          >
            <Terminal className="w-4 h-4 mr-2" />
            예제 코드
          </a>
        </div>
      </div>
    </div>
  );
  
  // 기능 섹션 컴포넌트
  const FeaturesSection = () => (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">주요 기능</h2>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start">
            <div className="bg-purple-100 p-3 rounded-lg mr-4">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">GPU 가속 양자 회로 시뮬레이션</h3>
              <p className="text-gray-600">
                CUDA와 OpenCL을 활용한 고성능 양자 회로 시뮬레이션으로 CPU 대비 최대 100배 빠른 연산 속도를 제공합니다.
                복잡한 게이트 연산과 큐비트 상태 계산을 대규모 병렬 처리하여 실제 양자 컴퓨터 없이도 
                40+ 큐비트 시스템을 효율적으로 시뮬레이션할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start">
            <div className="bg-purple-100 p-3 rounded-lg mr-4">
              <Layers className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">하이브리드 양자-고전 알고리즘 최적화</h3>
              <p className="text-gray-600">
                QAOA, VQE 등의 하이브리드 양자-고전 알고리즘에서 파라미터 최적화 과정을 GPU로 가속화합니다.
                그라디언트 계산, 비용 함수 평가, 파라미터 업데이트를 병렬로 처리하여 양자 머신러닝과 
                최적화 알고리즘의 수렴 속도를 크게 향상시킵니다.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start">
            <div className="bg-purple-100 p-3 rounded-lg mr-4">
              <Server className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Distributed Quantum Computing Framework</h3>
              <p className="text-gray-600">
                Distributed computing framework for large-scale quantum simulations in multi-GPU environments.
                Distribute workloads across multiple nodes via MPI interface and efficiently split qubit state vectors
                to run large-scale quantum algorithms even on local workstations.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start">
            <div className="bg-purple-100 p-3 rounded-lg mr-4">
              <Code className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Integrated Development Environment</h3>
              <p className="text-gray-600">
                API that seamlessly integrates with major quantum computing frameworks (Qiskit, Cirq, PyQuil, etc.).
                Use existing quantum code with minimal changes for GPU-accelerated simulation, and
                includes comprehensive tools for quantum circuit optimization, noise modeling, and result visualization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Documentation component
  const DocumentationSection = () => (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Documentation & Getting Started</h2>
      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold mb-4">Quick Start Guide</h3>
        <div className="bg-gray-800 p-4 rounded-md text-white font-mono text-sm mb-4 overflow-x-auto">
          <pre>
{`# Install package
pip install quantum-gpu

# Use in Python code
import quantum_gpu as qgpu

# Create quantum circuit
circuit = qgpu.QuantumCircuit(5)  # 5-qubit circuit
circuit.h(0)  # Hadamard gate
circuit.cx(0, 1)  # CNOT gate
circuit.measure_all()

# Run with GPU backend
backend = qgpu.GPUBackend()
result = backend.run(circuit, shots=1000)
print(result.counts)`}
          </pre>
        </div>
        <a href="#full-guide" className="text-purple-600 hover:text-purple-800">
          View Full Guide →
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Tutorials</h3>
          <ul className="space-y-3">
            <li>
              <a href="#basics" className="flex items-center text-purple-600 hover:text-purple-800">
                <div className="bg-purple-100 p-1 rounded-full mr-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                Basic Quantum Circuit Simulation
              </a>
            </li>
            <li>
              <a href="#optimization" className="flex items-center text-purple-600 hover:text-purple-800">
                <div className="bg-purple-100 p-1 rounded-full mr-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                Quantum Optimization Algorithms (QAOA)
              </a>
            </li>
            <li>
              <a href="#vqe" className="flex items-center text-purple-600 hover:text-purple-800">
                <div className="bg-purple-100 p-1 rounded-full mr-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                Variational Quantum Eigensolver (VQE)
              </a>
            </li>
            <li>
              <a href="#ml" className="flex items-center text-purple-600 hover:text-purple-800">
                <div className="bg-purple-100 p-1 rounded-full mr-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                Quantum Machine Learning Models
              </a>
            </li>
            <li>
              <a href="#distributed" className="flex items-center text-purple-600 hover:text-purple-800">
                <div className="bg-purple-100 p-1 rounded-full mr-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                Distributed Quantum Simulation
              </a>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">API Reference</h3>
          <ul className="space-y-3">
            <li>
              <a href="#core-api" className="flex items-center text-purple-600 hover:text-purple-800">
                <div className="bg-purple-100 p-1 rounded-full mr-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                Core Module (quantum_gpu.core)
              </a>
            </li>
            <li>
              <a href="#circuits-api" className="flex items-center text-purple-600 hover:text-purple-800">
                <div className="bg-purple-100 p-1 rounded-full mr-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                Circuits Module (quantum_gpu.circuits)
              </a>
            </li>
            <li>
              <a href="#backends-api" className="flex items-center text-purple-600 hover:text-purple-800">
                <div className="bg-purple-100 p-1 rounded-full mr-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                Backends Module (quantum_gpu.backends)
              </a>
            </li>
            <li>
              <a href="#optimization-api" className="flex items-center text-purple-600 hover:text-purple-800">
                <div className="bg-purple-100 p-1 rounded-full mr-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                Optimization Module (quantum_gpu.optimization)
              </a>
            </li>
            <li>
              <a href="#ml-api" className="flex items-center text-purple-600 hover:text-purple-800">
                <div className="bg-purple-100 p-1 rounded-full mr-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                Machine Learning Module (quantum_gpu.ml)
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Community Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a 
            href="#community-forum" 
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow flex items-center"
          >
            <Github className="w-5 h-5 mr-3 text-purple-600" />
            <span>Community Forum</span>
          </a>
          <a 
            href="#discord" 
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow flex items-center"
          >
            <MessageCircle className="w-5 h-5 mr-3 text-purple-600" />
            <span>Discord Channel</span>
          </a>
          <a 
            href="#showcase" 
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow flex items-center"
          >
            <Cpu className="w-5 h-5 mr-3 text-purple-600" />
            <span>Project Showcase</span>
          </a>
        </div>
      </div>
    </div>
  );
  
  // Benchmark component
  const BenchmarkSection = () => (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Performance Benchmarks</h2>
      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold mb-4">Hardware Performance Comparison</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hardware</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">16-qubit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24-qubit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">32-qubit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">36-qubit</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CPU (i9-12900K)</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">125ms</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.8s</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16.2s</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">N/A</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">RTX 3070</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.3ms</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">42ms</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">620ms</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.4s</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">RTX 4080</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.4ms</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28ms</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">380ms</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.9s</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">RTX 4090</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.9ms</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">19ms</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">260ms</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.2s</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4 x RTX 4090</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.7ms</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8ms</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">69ms</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">320ms</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-4">* Times based on single circuit execution, lower is better</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Algorithm Acceleration Ratios</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Quantum Fourier Transform (QFT)</span>
                <span className="text-sm font-medium text-purple-600">94x faster</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-purple-600 h-3 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Shor's Algorithm</span>
                <span className="text-sm font-medium text-purple-600">89x faster</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-purple-600 h-3 rounded-full" style={{ width: '89%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Grover's Search Algorithm</span>
                <span className="text-sm font-medium text-purple-600">76x faster</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-purple-600 h-3 rounded-full" style={{ width: '76%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">QAOA Optimization</span>
                <span className="text-sm font-medium text-purple-600">64x faster</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-purple-600 h-3 rounded-full" style={{ width: '64%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Quantum Machine Learning (QNN)</span>
                <span className="text-sm font-medium text-purple-600">52x faster</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-purple-600 h-3 rounded-full" style={{ width: '52%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Memory Usage by Qubit Count</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qubit Count</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Memory Required</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supported GPUs</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">24 qubits</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">~256 MB</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">All supported GPUs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">28 qubits</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">~4 GB</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">GTX 1660 or higher</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">32 qubits</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">~64 GB</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">RTX 3090 or higher</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">36 qubits</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">~1 TB</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Multi-GPU required</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">40+ qubits</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">~16+ TB</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Distributed cluster required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">* Required memory can be reduced with tensor network optimization techniques</p>
        </div>
      </div>
      
      <div className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Run Your Own Benchmarks</h3>
        <p className="mb-4">
          You can run benchmarks on your own hardware to check performance.
          After installation, run the following commands:
        </p>
        <div className="bg-gray-800 p-4 rounded-md text-white font-mono text-sm mb-4 overflow-x-auto">
          <pre>
{`# Run full benchmark suite
python -m quantum_gpu.benchmark

# Run benchmarks for specific algorithm
python -m quantum_gpu.benchmark --algorithm qft

# Run benchmarks for specific qubit range
python -m quantum_gpu.benchmark --qubits 10 24`}
          </pre>
        </div>
        <a href="#more-benchmark-options" className="text-purple-600 hover:text-purple-800">
          See More Benchmark Options →
        </a>
      </div>
    </div>
  );

  // 렌더 내용 함수
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'download':
        return <DownloadSection />;
      case 'features':
        return <FeaturesSection />;
      case 'docs':
        return <DocumentationSection />;
      case 'benchmark':
        return <BenchmarkSection />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
      <footer className="bg-white mt-12 py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-purple-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
              </svg>
              <span className="ml-2 text-gray-600 font-medium">퀀텀-GPU 플랫폼</span>
            </div>
            <div className="flex space-x-6">
              <a href="#about" className="text-gray-500 hover:text-gray-800">회사 소개</a>
              <a href="#contact" className="text-gray-500 hover:text-gray-800">문의하기</a>
              <a href="#privacy" className="text-gray-500 hover:text-gray-800">개인정보처리방침</a>
              <a href="#terms" className="text-gray-500 hover:text-gray-800">이용약관</a>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-200 pt-6">
            <p className="text-center text-sm text-gray-500">© 2025 퀀텀-GPU 플랫폼. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuantumGPUPlatform;
