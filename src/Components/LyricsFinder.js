import React, {useState} from "react";

const LyricsFinder = () => {

    const [artist, setArtist] = useState('')
    const [song, setSong] = useState('')
    const [lyrics, setLyrics] = useState('')
    const [displayError, setDisplayError] = useState('')

    
    const handleArtistInputData = (e) => {
        setArtist(e.target.value)
    }
    const handleSongInputData = (e) => {
        setSong(e.target.value)
    }

        const fetchedData = async () => {
            const URL = `https://api.lyrics.ovh/v1/${artist}/${song}`;
            try {
                const response = await fetch(URL);
                const data = await response.json();
                

            if(data.lyrics) {
                setLyrics(data.lyrics)
                setDisplayError('')
            } else {
                setLyrics('')
                setDisplayError('Lyrics not found. Please check artist and song name.')
            }
        } catch (error) {
            setDisplayError("Error fetching lyrics. Please try again.");
            console.error("Error", error)
        }
            }
    return (
        <>
            <h3>Lyrics Finder</h3>
            <div>
                <form>
                    <input type="text" placeholder="Artist name" value={artist} onChange={handleArtistInputData} required/>
                    <input type="text" placeholder="Song name" value={song} onChange={handleSongInputData} required/>
                </form>
                <button onClick={() => {fetchedData(`https://api.lyrics.ovh/v1/${artist}/${song}`)}}>Search</button>
            </div> <hr />
            {lyrics && <pre>{lyrics}</pre>}
            {displayError && <pre>{displayError}</pre>}
        </>
    )
}

export default LyricsFinder