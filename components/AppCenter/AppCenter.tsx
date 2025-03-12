import React, { useRef, useState } from 'react';
import * as Styled from './AppCenter.styles';
import PinnedApps from '../PinnedApps/PinnedApps';
import Recommended from '../Recommended/Recommended';
import { FiChevronLeft, FiChevronRight, FiPower } from 'react-icons/fi';
import Avatar from '../Avatar/Avatar';
import SearchBar from '../SearchBar/SearchBar';
import Bing from '../Apps/Bing/Bing';
import { useActions } from '../../hooks/useActions';
import AllAppsModal from '../AllAppsModal/AllAppsModal';
import { useRouter } from 'next/router';
import { useCloseModalIfClickedOutside } from '../../hooks/useCloseIfClickedOutside';
import { useTypedSelector } from '../../hooks/useTypedSelector';

/**
 *Renders AppCenter content with search bar, pinned apps and recommended section
 *Has two sections. Initial screen and expanded list of all apps that are controlled through "isAllAppsOnScreen" flag
 *@function AppCenter
 *@returns {JSX.Element} - Rendered AppCenter component
 */
const AppCenter = (): JSX.Element => {
   const containerRef = useRef<any>(null);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isAllAppsOnScreen, setIsAllAppsOnScreen] = useState<boolean>(true);
  const { openWindow, closeAppCenterModal } = useActions();
    const { isAppCenterOpen } = useTypedSelector((state) => state.ui);

  const handlePerformSearch = (term: string) => {
    openWindow({
      windowName: 'Bing',
      windowContent: <Bing searchQuery={term} />,
      windowIcon: '/assets/icons/startmenu/icons8-microsoft-edge.svg',
      size: {
        width: 0.8 * window.innerWidth,
        height: 0.8 * window.innerHeight,
      },
      isOpen: true,
    });
  };
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlePerformSearch(searchTerm);
  };
  useCloseModalIfClickedOutside({
    modalRef: containerRef,
    isModalOpen: isAppCenterOpen,
    isAppCenter: true,
    closeModalFunction: closeAppCenterModal,
  });

  return (
    <Styled.Container ref={containerRef}>
      {isAllAppsOnScreen ? (
        <Styled.InitialScreen>
          <Styled.AllApps>
            <Styled.SearchBarForm onSubmit={handleSearch}>
              <SearchBar
                name={'search-bar'}
                type={'text'}
                placeholder={'Type here to search'}
                value={searchTerm}
                setValue={setSearchTerm}
              />
            </Styled.SearchBarForm>
            <Styled.SectionHeader margin={'0 0 1rem 0'}>
              <h3>Pinned</h3>
              <div onClick={() => setIsAllAppsOnScreen((p) => !p)}
              style={{cursor: 'pointer', display:'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor:'rgba(46, 61, 83, 0.69)',
                color:'rgba(255, 255, 255, 0.835)', padding:'5px 10px', gap:'0.25rem', transition:'transform 0.3s, background-color 0.2s, color 0.2s', fontSize:'13px', borderRadius:'4px'
              }}
              >
                All Apps
                <FiChevronRight className="icon" />
              </div>
            </Styled.SectionHeader>

            <PinnedApps />

            <Styled.SectionHeader margin={'2rem 0 0 0'}>
              <h3>Recommended</h3>
              <div onClick={() => setIsAllAppsOnScreen((p) => !p)}
              style={{cursor: 'pointer', display:'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor:'rgba(46, 61, 83, 0.69)',
                color:'rgba(255, 255, 255, 0.835)', padding:'5px 10px', gap:'0.25rem', transition:'transform 0.3s, background-color 0.2s, color 0.2s', fontSize:'13px', borderRadius:'4px'
              }}
              >
                More
                <FiChevronRight className="icon" />
              </div>
            </Styled.SectionHeader>

            <Recommended />
          </Styled.AllApps>
          <Styled.Footer>
            <Avatar
              src={'/assets/avatar.png'}
              firstName={'Roman'}
              lastName={'Kriuchko'}
              isActive={false}
              hasBadge={false}
              width={'45px'}
              onClick={() => router.push('/portfolio')}
            />
            <Styled.PowerOff>
              <FiPower className={'power-off'} />
            </Styled.PowerOff>
          </Styled.Footer>
        </Styled.InitialScreen>
      ) : (
        <Styled.AllAppsList>
          <Styled.SearchBarForm onSubmit={handleSearch}>
            <SearchBar
              name={'search-bar'}
              type={'text'}
              placeholder={'Type here to search'}
              value={searchTerm}
              setValue={setSearchTerm}
            />
          </Styled.SearchBarForm>
          <Styled.SectionHeader margin={'0 0 1rem 0'}>
            <h3>All Apps</h3>
            <div
              style={{cursor: 'pointer', display:'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor:'rgba(46, 61, 83, 0.69)',
                color:'rgba(255, 255, 255, 0.835)', padding:'5px 10px', gap:'0.25rem', transition:'transform 0.3s, background-color 0.2s, color 0.2s', fontSize:'13px', borderRadius:'4px'
              }}
              onClick={() => setIsAllAppsOnScreen((p) => !p)}
            >
              <FiChevronLeft className="icon" />
              Back
            </div>
          </Styled.SectionHeader>
          <AllAppsModal />
        </Styled.AllAppsList>
      )}
    </Styled.Container>
  );
};
export default AppCenter;
