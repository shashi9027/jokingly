export default function JokesCard({ data }) {
    return (
        <div className="jokes-card">
            <div>
                {data?.title}
            </div>
            <br />
            <div>
                {data?.body}
            </div>
        </div>
    )
}